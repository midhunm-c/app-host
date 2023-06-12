
import { Header } from "./Header";
import dynamic from "next/dynamic";

// const BlogComponent = dynamic(() => import("blog/blogs"), {ssr: false})

const HomeScreen = () => {
    return (
        <div>
            <Header />
            <div>Main application</div>

            {/* <BlogComponent /> */}
        </div>
    )
}

export default HomeScreen