import React from "react";
import ItemSkill from "@/app/skills/components/ItemSkill";
// import { SiJavascript } from "react-icons/si";
// import { SiTypescript } from "react-icons/si";
// import { RiNextjsFill } from "react-icons/ri";

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
        color="hover:text-purple-500"
        url="https://redux.js.org/"
      >
        Redux
      </ItemSkill>
      <ItemSkill i={7} color="hover:text-blue-300" url="https://react.dev/">
        Context API
      </ItemSkill>
      <ItemSkill
        i={8}
        color="hover:text-blue-700"
        url="https://tailwindcss.com/"
      >
        Tailwind CSS
      </ItemSkill>
      <ItemSkill
        i={9}
        color="hover:text-pink-300"
        url="https://styled-components.com/"
      >
        Styled comp
      </ItemSkill>
      <ItemSkill i={10} color="hover:text-green-500" url="https://daisyui.com/">
        DaisyUi
      </ItemSkill>
      <ItemSkill
        i={11}
        color="hover:text-black"
        url="https://www.radix-ui.com/"
      >
        RadixUi
      </ItemSkill>
      <ItemSkill i={12} color="hover:text-Purple" url="https://github.com/">
        Git & Github
      </ItemSkill>
      {/*<div className="w-full mt-5 sm2:col-span-4 col-span-3 grid grid-cols-4 place-items-center gap-2 px-2">*/}
      {/*  <SiJavascript size={40} className="fill-yellow-500" />*/}
      {/*  <SiTypescript size={40} className="fill-blue-500" />*/}
      {/*  <RiNextjsFill size={40} />*/}
      {/*</div>*/}
    </div>
  );
}

export default ListSkills;
