export interface DynamicButtonProps {
    btnText: string;
    btnUrl?: string;
    btnAction?: () => void;
    btnType: "primary" | "secondary" | "outline";
}
