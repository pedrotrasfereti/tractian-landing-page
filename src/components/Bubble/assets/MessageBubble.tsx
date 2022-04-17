import React from "react";

function MessageBubble() {
  return (
    <svg width={95} height={70} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width={87} height={56} rx={15} fill="#F9F9F9" />
      <path
        d="M89.347 63.194c.324 2.39-2.163 4.165-4.318 3.083L62.432 54.935c-2.019-1.013-2.236-3.81-.397-5.123L81.244 36.1c1.838-1.312 4.413-.199 4.716 2.04l3.388 25.055Z"
        fill="#F9F9F9"
      />
      <circle cx={22.5} cy={28.5} r={5.5} fill="#C4C4C4" />
      <circle cx={43.5} cy={28.5} r={5.5} fill="#C4C4C4" />
      <circle cx={64.5} cy={28.5} r={5.5} fill="#C4C4C4" />
    </svg>
  );
}

export default MessageBubble;
