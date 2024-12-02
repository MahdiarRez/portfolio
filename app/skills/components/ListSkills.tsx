import React from "react";
import ItemSkill from "@/app/skills/components/ItemSkill";

function ListSkills() {
  return (
    <div className="absolute place-items-center grid grid-cols-3 mt-32 sm2:grid-cols-4 lg:mt-60 sm:mt-36 gap-3 w-full px-3 max-w-fit">
      <ItemSkill
        i={1}
        color="hover:text-yellow-300"
        url="https://javascript.info/"
      >
        Javascript
      </ItemSkill>
      <ItemSkill
        i={2}
        color="hover:text-blue-500"
        url="https://www.typescriptlang.org/"
      >
        Typescript
      </ItemSkill>
      <ItemSkill i={3} color="hover:text-blue-300" url="https://react.dev/">
        React JS
      </ItemSkill>
      <ItemSkill i={4} color="hover:text-black" url="https://nextjs.org/">
        Next JS
      </ItemSkill>
      <ItemSkill
        i={5}
        color="hover:text-red-500"
        url="https://tanstack.com/query/latest"
      >
        React Query
      </ItemSkill>
      <ItemSkill
        i={6}
        color="hover:text-green-500"
        url="https://react-leaflet.js.org/"
      >
        React Leaflet
      </ItemSkill>
      <ItemSkill
        i={7}
        color="hover:text-purple-500"
        url="https://redux.js.org/"
      >
        Redux
      </ItemSkill>
      <ItemSkill i={8} color="hover:text-blue-300" url="https://react.dev/">
        Context API
      </ItemSkill>
      <ItemSkill i={9} color="hover:text-yellow-400" url="https://motion.dev/">
        Framer motion
      </ItemSkill>
      <ItemSkill
        i={10}
        color="hover:text-blue-700"
        url="https://tailwindcss.com/"
      >
        Tailwind CSS
      </ItemSkill>
      <ItemSkill
        i={11}
        color="hover:text-pink-300"
        url="https://styled-components.com/"
      >
        Styled comp
      </ItemSkill>
      <ItemSkill i={12} color="hover:text-green-500" url="https://daisyui.com/">
        DaisyUi
      </ItemSkill>
      <ItemSkill
        i={13}
        color="hover:text-black"
        url="https://www.radix-ui.com/"
      >
        RadixUi
      </ItemSkill>
      <ItemSkill
        i={14}
        color="hover:text-black"
        url="https://ui.aceternity.com/"
      >
        AceternityUi
      </ItemSkill>
      <ItemSkill i={15} color="hover:text-white" url="https://ui.shadcn.com/">
        ShadCn
      </ItemSkill>
      <ItemSkill i={16} color="hover:text-Purple" url="https://github.com/">
        Git & Github
      </ItemSkill>
    </div>
  );
}

export default ListSkills;
