import { FC } from "react";
import Header from "@/components/common/header/header.component";
import { MainLayoutProps } from "@/types/layout/layout.interface";
import Footer from "@/components/common/footer/footer.component";

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default MainLayout;
