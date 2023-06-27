import Link from "next/link"
import Layout from "src/components/Layout"
export default function Signup(){
    return (
        <Layout title = "Signup">
            
            <div className="container text-[1rem]  xl:max-w-[1140px] xxl:max-w-[1320px]  h-100 overflow-hidden">
                <h1 className="mb-[4px] text-[2.5rem] font-medium">Create an account</h1>
                <div className="flex flex-col mt-[5px] text-[1rem]">
                    <div className="flex flex-col flex-auto p-[5px] text-[#212529]">
                        <span className="ml-[6px]">Username</span>
                        <input type="text" m-auto="true" className="flex-auto m-[6px] focus:outline-none border-[1px] rounded-[0.25rem] py-[0.375rem] px-[0.75rem] focus:border-[#86b7fe] focus:shadow-[0_0_0_0.25rem_rgba(13,110,253,.25)]"></input>
                    
                    </div>
                    <div className="flex flex-col flex-auto p-[5px] text-[#212529]">
                        <span className="ml-[6px]" >Email</span>
                        <input type="text"  m-auto="true" className="flex-auto m-[6px] focus:outline-none border-[1px] rounded-[0.25rem] py-[0.375rem] px-[0.75rem] focus:border-[#86b7fe] focus:shadow-[0_0_0_0.25rem_rgba(13,110,253,.25)]"></input>
                    
                    </div>
                    <div className="flex flex-col flex-auto p-[5px] text-[#212529]">
                        <span className="ml-[6px]" >Password</span>
                        <input type="password"  m-auto="true" className="flex-auto m-[6px] focus:outline-none border-[1px] rounded-[0.25rem] py-[0.375rem] px-[0.75rem] focus:border-[#86b7fe] focus:shadow-[0_0_0_0.25rem_rgba(13,110,253,.25)]"></input>
                    
                    </div>
                    <div className="flex flex-row p-[5px] text-[#212529] items-center">
                        <input type="checkbox"  className="m-[6px] pl-[1.5em] w-[1em] h-[1em] round-[0.25rem]  border-[1px]   focus:outline-none border-[#212529] focus:shadow-[0_0_0_.25rem_rgba(13,110,253,.25)] "/>
                        <span>
                            I have read and agree to the <Link className = "text-[#0d6efd] underline underline-offset-1" href = "#">Terms of Service</Link> and <Link href ="" className = "text-[#0d6efd] underline underline-offset-1" >Privacy Policy</Link>.
                        </span>
                    </div>
                    
                    <div className="flex flex-row p-[5px] text-[#212529] items-center">
                        <Link href = "#" className=" py-[6px] flex items-center justify-items-center focus:outline-none   border-[1px] bg-[#198754] border-[#198754] px-[12px] rounded-[0.25rem] focus:border[#0a58ca] text-white focus:shadow-[0_0_0_0.25rem_rgba(13,110,253,.25)]">
                            Register
                        </Link>
                    </div>
                    
                </div>
            </div>
        </Layout>
    )
}