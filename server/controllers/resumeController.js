import imagekit from "../configs/imageKit.js";
import Resume from "../models/Resume.js";
import fs from 'fs'

export const createResume = async (req, res) => {
    try {
        const userId = req.userId;
        const { title } = req.body;
        const newResume = await Resume.create({ userId, title })
        return res.status(201).json({ message: 'Resume created successfully', resume: newResume })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

export const deleteResume = async (req, res) => {
    try {
        const userId = req.userId;
        const { resumeId } = req.params;
        const newResume = await Resume.findOneAndDelete({ userId, _id: resumeId })
        return res.status(201).json({ message: 'Resume deleted successfully', resume: newResume })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

export const getResumeById = async (req, res) => {
    try {
        const userId = req.userId;
        const { resumeId } = req.params;
        const resume = await Resume.findOne({ userId, _id: resumeId })
        if (!resume) {
            return res.status(404).json({ message: "Resume not found" })
        }
        resume.__v = undefined;
        resume.createdAt = undefined;
        resume.updatedAt = undefined;
        return res.status(200).json({ resume })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

import mongoose from "mongoose";

export const getPublicResumeById = async (req, res) => {
  try {
    const { resumeId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(resumeId)) {
      return res.status(400).json({ message: "Invalid resume ID" });
    }

    const resume = await Resume.findOne({
      _id: resumeId,
      public: true
    });

    if (!resume) {
      return res.status(404).json({ message: "Resume not found" });
    }

    return res.status(200).json({ resume });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};


export const updateResume = async (req, res) => {
  try {
    const userId = req.userId;
    const { resumeId, resumeData, removeBackground } = req.body;
    const image = req.file;

    let resumeDataCopy =
      typeof resumeData === "string"
        ? JSON.parse(resumeData)
        : JSON.parse(JSON.stringify(resumeData));

    if (image) {
      const imageStream = fs.createReadStream(image.path);

      const response = await imagekit.files.upload({
        file: imageStream,
        fileName: "resume.png",
        folder: "user-resumes",
        transformation: {
          pre:
            "w-300,h-300,fo-face,z-0.75" +
            (removeBackground ? ",e-bgremove" : "")
        }
      });

      resumeDataCopy.personal_info ??= {};
      resumeDataCopy.personal_info.image = response.url;

      fs.unlinkSync(image.path); // cleanup
    }

    const resume = await Resume.findOneAndUpdate(
      { _id: resumeId, userId },
      resumeDataCopy,
      { new: true }
    );

    return res.status(200).json({
      message: "Saved successfully",
      resume
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};
