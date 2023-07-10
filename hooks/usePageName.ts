import { usePathname } from "next/navigation";


export const usePageName = () => {
    const path = usePathname();

    let pathname = path.split("/")[1];

    return {
        pathname: !pathname ? "Home" : pathname
    }

}