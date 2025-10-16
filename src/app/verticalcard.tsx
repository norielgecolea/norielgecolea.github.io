'use client';

import Image from 'next/image';

interface VerticalCardProps {
  image: string;
  title: string;
  body: string;
  tags?: string[];
}

export default function VerticalCard({ image, title, body, tags = [] }: VerticalCardProps) {
  return (
    <div className=" no-select hover:scale-[1.02] duration-300  max-w-sm rounded-4xl overflow-hidden shadow-lg bg-neutral-600/90">
      <Image
        className="w-full"
        src={image}
        alt={title}
        width={400}
        height={250}
      />
      
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <p className="text-gray-400 text-base font-mono">{body}</p>
      </div>

      {tags.length > 0 && (
        <div className="px-6 pt-4 pb-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
