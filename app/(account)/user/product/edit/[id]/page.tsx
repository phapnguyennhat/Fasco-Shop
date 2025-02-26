import { getAllBrand, getCategory, getProductDetailById, getTags } from "@/lib/api"
import { SearchParams } from "@/lib/utils"
import FormUpdateProduct from "./FormUpdateProduct";

interface IProps {
  params: Promise<{id: string}>
}
export default async function EditProduct({params}: IProps) {
  const {id} = await params

  const [brands, tags, categories, product] = await Promise.all([
      getAllBrand(),
      getTags(),
      getCategory(),
      getProductDetailById(id)
  ]);


  
  return (
      <main className=" w-full pl-4 ">
          <section className="   pl-4 pb-[18px] w-full mb-[30px] border-b  ">
              <h2 className="  text-[#333] text-lg">Update Product</h2>
          </section>

          <section className="    overflow-x-scroll mb-[30px] scrollbar-hide  w-full">
              <FormUpdateProduct
                  brands={brands}
                  categories={categories}
                  product={product}
                  tags={tags}
              />
          </section>
      </main>
  );
}
