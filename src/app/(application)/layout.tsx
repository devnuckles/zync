import { FC } from "react";
import Header from "@/components/common/header/header.component";
import { MainLayoutProps } from "@/types/layout/layout.interface";

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            {children}
        </>
    );
};

export default MainLayout;
