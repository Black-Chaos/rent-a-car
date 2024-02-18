import { Oval } from "react-loader-spinner";

export function Loader() {
    return (
    //   <div className="backdrop">
          <Oval
            visible={true}
            height="150"
            width="150"
            color="#4fa94d"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass="backdrop"
          />
    //   </div>
    );
}