export default function Card({image, title, subtitle}) {

  console.log(image);
    const src = require("./assets/" + image);
    
    return (
<div>
  <div>
    <h1 class="text-xl lg:text-4xl font-bold leading-none tracking-tight text-gray-700"> {title} </h1>
    <p class="my-4 text-lg text-gray-500"> {subtitle} </p>
  </div>
  <div>
   <img className="sm:h-96 shadow-2xl"  src={src} />
  </div>
</div>
    );
}


