import Link from "next/link"
import Layout from "src/components/Layout"
export default function Signup(){
    return (
        <Layout title = "Signup">
            
            <div className="container text-[1rem]  xl:max-w-[1140px] xxl:max-w-[1320px]  h-100 overflow-hidden">
                <h1 className="mb-[8px] text-[2.5rem] font-medium">Create an account</h1>
                <div className="flex flex-col mt-[16px] text-[1rem]">
                    <div className="flex flex-col flex-auto p-[10px] text-[#212529]">
                        <span>Username</span>
                        <input type="text" placeholder="Username" m-auto className="flex-auto focus:outline-none border-[1px] rounded-[0.25rem] py-[0.375rem] px-[0.75rem] focus:border-[#86b7fe] focus:shadow-[0_0_0_0.25rem_rgba(13,110,253,.25)]"></input>
                    
                    </div>
                    
                    <div className="flex flex-auto p-[10px] w-[30%]">
                        <Link href = "#" className="flex items-center justify-items-center focus:outline-none   border-[1px] bg-[#0b5ed7] border-[#0a58ca] px-[12px] rounded-[0.25rem] focus:border[#0a58ca] text-white focus:shadow-[0_0_0_0.25rem_rgba(13,110,253,.25)]">
                            Login
                        </Link>
                    </div>
                    
                </div>
            </div>
        </Layout>
    )
}