export default function Badge({ name }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-stone-100 text-stone-700 border border-stone-200/80 transition-all duration-200 hover:bg-stone-800 hover:text-white hover:border-stone-800 hover:shadow-sm">
      {name}
    </span>
  );
}
