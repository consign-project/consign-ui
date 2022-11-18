function Input(props) {
  return (
    <div>
      <label for="hs-trailing-icon" class="block text-sm font-medium mb-2 dark:text-white">{props.name}</label>
      <div class="relative">
        <input type="text" id="hs-trailing-icon" name="hs-trailing-icon" class="py-3 px-4 pr-11 block w-full border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" placeholder={props.placeholder}></input>
        <div class="absolute inset-y-0 right-0 flex items-center pointer-events-none z-20 pr-4">
          {props.children}
        </div>
      </div>
    </div>
  );
}
export default Input

