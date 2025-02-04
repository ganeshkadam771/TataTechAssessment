Project created using Vite

Run below commands to run project 

1 npm install
2 npm run dev

Install tailwind css

1 npm install tailwindcss @tailwindcss/vite

2 configure vite plugin 

    import { defineConfig } from 'vite'
    import tailwindcss from '@tailwindcss/vite'
    export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
    })

3 import Tailwind css 

    @import "tailwindcss";


Install Font awesome 

1 npm i --save @fortawesome/fontawesome-svg-core

2 npm i --save @awesome.me/kit-KIT_CODE

3 npm i --save @fortawesome/react-fontawesome@latest


