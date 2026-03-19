export function Spacer() {
  return (
    <div className="h-32 lg:h-48 border-b border-zinc-300 flex flex-col justify-center items-center relative overflow-hidden bg-[#EBEBEB]">
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center gap-8 w-full px-8 lg:px-24">
         <div className="h-px bg-zinc-400 flex-grow" />
         <div className="flex gap-2">
           <div className="w-2 h-2 bg-zinc-400" />
           <div className="w-2 h-2 bg-zinc-400" />
         </div>
         <div className="h-px bg-zinc-400 flex-grow" />
      </div>
    </div>
  );
}
