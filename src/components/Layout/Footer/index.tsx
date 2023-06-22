export default function Footer() {
    return(
        <footer className="flex text-[#6c757d] text-[1rem] flex-row justify-between p-[8px] mb-[30px] pt-[20px] mt-[20px] border-t container mx-auto xl:max-w-[1140px] xxl:max-w-[1320px]">
            <span>© 2023 Tensor.Exchange</span>
            <ul className="flex flex-row">
                <li className="p-[0.5rem]">
                    FAQs
                </li>
                <li className="p-[0.5rem]">
                    Terms of Service
                </li>
                <li className="p-[0.5rem]">
                    Privacy Policy
                </li>
            </ul>
        </footer>
    )
}