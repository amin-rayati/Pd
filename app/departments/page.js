import Filter from "@/components/Departments-components/Filter";
import Course from "@/components/Departments-components/Course";
import SearchBar from "@/components/SearchBar/SearchBar";

function page() {
  return (
    <div className="text-center lg:w-[95%] my-10 mx-5 lg:mx-auto">
      <div className="block lg:hidden">
        <SearchBar />
      </div>
      <div className="grid grid-cols-12">
        <Course />
        <Filter />
      </div>
    </div>
  );
}

export default page;
