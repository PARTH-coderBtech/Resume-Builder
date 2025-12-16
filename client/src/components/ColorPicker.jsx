import React, { useState } from 'react'
import {Check, Palette} from 'lucide-react'
const ColorPicker = ({selectedColor,onChange}) => {
    const colors = [
 { name: "Navy Blue", value: "#1E3A8A" },
  { name: "Slate Gray", value: "#475569" },
  { name: "Charcoal", value: "#334155" },
  { name: "Black", value: "#000000" },

  { name: "Soft Blue", value: "#3B82F6" },
  { name: "Sky Gray", value: "#94A3B8" },
  { name: "Cool White", value: "#F8FAFC" },

  { name: "Forest Green", value: "#166534" },
  { name: "Olive Gray", value: "#556052" },
  { name: "Cream", value: "#FAF3E0" },

  { name: "Indigo", value: "#4F46E5" },
  { name: "Cyan", value: "#06B6D4" },
  { name: "Dark Gray", value: "#374151" }
    ]
    const [isOpen,setIsOpen] = useState(false);
  return (
    <div className='relative'>
      <button onClick={()=> setIsOpen(!isOpen)} className='flex items-center gap-1 text-sm text-purple-600
      bg-gradient-to-br from-purple-50 to-purple-100
      ring-purple-300 hover:ring transition-all px-3 py-2 
      rounded-lg'>
        <Palette size={16} /> <span className='max-sm:hidden'>Accent</span>
      </button>
      {isOpen && (
        <div className='grid grid-cols-4 w-60 gap-2 absolute top-full left-0
        right-0 p-3 mt-2 z-10 bg-white rounded-md border border-gray-200 shadow-sm'>
          {colors.map((color)=>(
            <div onClick={()=>{onChange(color.value),setIsOpen(false)}} key={color.value} className='relative cursor-pointer group flex flex-col'
            >
              <div className='w-12 h-12 rounded-full border-2 border-transparent group-hover:border-black/25
                transition-colors' style={{backgroundColor : color.value}}></div>
                {selectedColor === color.value && (
                  <div className='absolute top-0 left-0 right-0
                  bottom-4.5 flex items-center justify-center'>
                    <Check className='size-5 text-white'/>
                  </div>
                )}
                <p className='text-xs text-center mt-1 text-gray-600'>{ color.name}</p>
            </div>
          ))}

        </div>
      )}
    </div>
  )
}

export default ColorPicker