import { Link } from "react-router-dom";
import CardProduct from "../../components/CardProduct";
import Footer from "../../components/Footer";
import NavbarSearchBrown from "../../components/NavbarSearchBrown";
import prize from "../../assets/reward.png";
import filterIcon from "../../assets/icon/filter.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faStar } from "@fortawesome/free-solid-svg-icons";
import CheckBox from "../../components/CheckBox";
import { useFetch } from "../../hooks/useFetch";
import { Loading } from "../../components/Loading";
const ProductList = () => {
  const { data, isLoading, error } = useFetch("/products");
  return (
    <>
    {isLoading && <Loading />}
    <NavbarSearchBrown>
      <div className="md:px-[2rem] p-4 bg-[#FAFBFE] relative">
        {/* BreadCrumbs */}
        <div className="flex justify-between items-center bg-white">
          <div className="breadcrumbs text-sm">
            <ul>
              <li>
                <Link to={"/"}>Beranda</Link>
              </li>
              <li className="font-medium">Product Lokal</li>
            </ul>
          </div>
          <p className="text-sm font-medium">Menampilkan 40 Hasil</p>
        </div>

        {/* Prize  */}
        <div className="px-4 py-2 shadow-md flex items-center justify-between rounded-2xl w-full my-4">
          <div className="flex items-center gap-4 w-full">
            <img src={prize} alt="prize" width={54} />
            <div className="">
              <p className="font-medium">Udah punya akun belum ?</p>
              <p className="text-sm">
                Buat akun atau log in yuk. Ada diskon dan benefit biar kamu
                makin cuan!{" "}
              </p>
            </div>
          </div>
          <Link
            to={"/login"}
            className="btn bg-[#ED7D311A] text-[#ED7D31] border-[#ED7D31]"
          >
            Masuk
          </Link>
        </div>

        <h1 className="text-2xl font-medium">Produk Lokal</h1>

        {/* Button Category */}
        <div className="flex gap-3 flex-wrap">
          <button className="btn btn-sm bg-[#ED7D311A] text-[#ED7D31] border-[#ED7D31] rounded-2xl">
            Makanan
          </button>
          <button className="btn btn-sm bg-transparent text-black border-black font-medium rounded-2xl">
            Tas
          </button>
          <button className="btn btn-sm bg-transparent text-black border-black font-medium rounded-2xl">
            Pakaian
          </button>
          <button className="btn btn-sm bg-transparent text-black border-black font-medium rounded-2xl">
            Kerajinan
          </button>
          <button className="btn btn-sm bg-transparent text-black border-black font-medium rounded-2xl">
            Lain-lain
          </button>
        </div>

        <div className="flex justify-center gap-4 md:flex-row flex-col mt-4">
          {/* Filter Section Start */}
          <div className="md:w-[20%] w-full">
            <div className="md:w-52 w-full flex-col">
              <div className="flex items-center justify-center bg-primary rounded-t-2xl py-2">
                <img src={filterIcon} alt="flter" width={24} />
                <h2 className=" text-white text-center">Filter</h2>
              </div>
              <div className="bg-[#F7F7F7] text-[#404040] px-5 pt-2 pb-5 rounded-b-2xl shadow-md">
                <h2 className="font-medium my-2">Urutkan</h2>
                <div className="flex md:flex-col flex-wrap gap-2">
                  <CheckBox label={"Terbaru"} />
                  <CheckBox label={"Popular"} />
                  <CheckBox label={"Terlaris"} />
                </div>
                <h2 className="font-medium mb-2 mt-4">Harga</h2>
                <div className="flex md:flex-col flex-wrap gap-2">
                  <CheckBox label={"Di bawah Rp100.000"} />
                  <CheckBox label={"Rp100.000-Rp500.000"} />
                  <CheckBox label={"Di atas Rp500.000"} />
                </div>
                <h2 className="font-medium mb-2 mt-4">Rating</h2>
                <div className="flex md:flex-col flex-wrap gap-2">
                  <div className="flex items-center gap-1">
                    <CheckBox label={"5"} />
                    <div className="flex items-center gap-1">
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-[#EBB467] text-xs"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-[#EBB467] text-xs"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-[#EBB467] text-xs"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-[#EBB467] text-xs"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-[#EBB467] text-xs"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckBox label={"4"} />
                    <div className="flex items-center gap-1">
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-[#EBB467] text-xs"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-[#EBB467] text-xs"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-[#EBB467] text-xs"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-[#EBB467] text-xs"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckBox label={"3"} />
                    <div className="flex items-center gap-1">
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-[#EBB467] text-xs"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-[#EBB467] text-xs"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-[#EBB467] text-xs"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckBox label={"2"} />
                    <div className="flex items-center gap-1">
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-[#EBB467] text-xs"
                      />
                      <FontAwesomeIcon
                        icon={faStar}
                        className="text-[#EBB467] text-xs"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckBox label={"1"} />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-[#EBB467] text-xs"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Filter Section End */}

          {/* Card Product section */}
          <div className="md:w-[80%] w-full">
            <div className="flex md:justify-around justify-center gap-4 flex-wrap my-4">
              {data &&
                data
                  .slice()
                  .reverse()
                  .map((item) => (
                    <CardProduct
                      key={item.id}
                      id={item.id}
                      img={item.photos[0].url_photo}
                      title={item.name}
                      price={item.price}
                    />
                  ))}
            </div>
          </div>

          {/* Pagination */}
        </div>
        <div className="flex justify-center  items-center ">
          <div className="join gap-2 border-none ">
            <button className="join-item text-gray-600 border-none bg-white hover:bg-orange-500 hover:text-white md:btn btn-xs">
              1
            </button>
            <button className="join-item text-gray-600 border-none bg-white hover:bg-orange-500 hover:text-white md:btn btn-xs">
              2
            </button>
            <button className="join-item text-gray-600 border-none bg-white hover:bg-orange-500 hover:text-white md:btn btn-xs">
              3
            </button>
            <button
              className="join-item text-gray-600 border-none bg-white md:btn btn-xs"
              disabled={true}
            >
              ...
            </button>
            <button className="join-item text-gray-600 border-none bg-white hover:bg-orange-500 hover:text-white md:btn btn-xs">
              12
            </button>

            <button className="join-item text-gray-600 border-none bg-white hover:bg-orange-500 hover:text-white md:btn btn-xs">
              {">"}
            </button>
          </div>
        </div>

        {/* Scroll Top */}
        <div
          className="w-full flex justify-end sticky bottom-4 cursor-pointer hover:bg-gray-300"
          onClick={() => window.scrollTo(0, 0)}
        >
          <FontAwesomeIcon
            icon={faArrowUp}
            className="bg-white rounded-full text-4xl px-2 py-1 shadow-md -my-12"
          />
        </div>
      </div>
      <Footer />
    </NavbarSearchBrown>
    </>
  );
};

export default ProductList;
