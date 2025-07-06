import men1 from '../../assets/images/men1.webp'
import men2 from '../../assets/images/men2.webp'
import men3 from '../../assets/images/men3.webp'
import men4 from '../../assets/images/men4.webp'

export default function Userreview(){
    return <>
        <div className="mx-auto bg-green-50 pb-10 px-4">
            <div className="text-center p-4 w-md-[768px] mx-auto">
                <p className="text-2xl">Publishing ease you've been missing</p>
                <p className='text-[13px] max-w-[400px] mx-auto py-3'>Remove your excuess. There's no reason you can't get your static site or client-side app online right now.</p>
            </div>
            <h1 className="text-center px-4 text-4xl italic max-w-[900px] mx-auto py-4 relative"><span class="md:text-[200px] absolute bottom-0 -translate-x-44 -translate-y-4 text-[#83c0a3]">&#x275B;&#x275B;</span>Absolutely in love with how easy and effective deployemt with <span className='text-green-400'>&#64;surge_sh</span> is.</h1>

            <div>
                <h1 className="text-center px-4 pt-4 text-4xl italic">Where have you been all my life.</h1>
                <div className="mx-auto w-[300px] flex flex-row">
                <div className="basis-1/2 p-4"><img src={men1} className=""/></div>
                <div className="basis-1/2 p-1 pt-8">    
                    <h4 className="text-[10px] font-bold ">&#x268A;Karolina Szczur</h4>
                    <h3 className="text-[12px]">JSConfEU & CSSConf</h3>
                </div>
            </div>
            </div>
            <div className="container mx-auto flex flex-col md:flex-row gap-2 mt-4 max-w-[800px]">
                <div className="basis-0 md:basis-1/3 border bg-[#aaa7a742] p-10 rounded ">
                    <p className='italic'>And...BAM. Site moved from Amazon S# to sweer new digs on <span className='text-green-400'>&#64;surge_sh</span> Just like that. <a className='text-green-400' target="_blank" href="https://shenoalawrence.com">shenoalawrence.com</a></p>
                    <div className='flex flex-row h-[80px] py-4'>
                        <div className=''><img src={men2} className='h-full'/></div>
                        <div className='pl-3'>
                            <h4 className='font-medium text-[10px] '>&#x268A;Shenoa Lawrence</h4>
                            <p className="text-[12px] pl-3 italic">Front-end designer & adventure seeker</p>
                        </div>
                    </div>                    
                </div>
                <div className="basis-0 md:basis-1/3 border bg-[#aaa7a742] p-10 rounded ">
                    <p className='italic'>Wow <span className='text-green-400'>&#64;surge_sh</span> is impressively friction-free sites.`npm install -g surge:echo "# Hello world" index.md; surge - build` done. Wow. Go get it.</p>
                    <div className='flex flex-row h-[80px] py-4'>
                        <div><img  src={men3} className='h-full'/></div>
                        <div className='pl-3'>                   
                            <h4 className='font-medium text-[10px] '>&#x268A;Remy Sharp</h4>
                            <p className="text-[12px] italic">Founder of Left Logic & creator of JS Bin</p>
                        </div>
                    </div>
                </div>
                <div className="basis-0 md:basis-1/3 border bg-[#aaa7a742] p-10 rounded ">
                    <p className='italic'>I think I just fell in love with <span className='text-green-400'>&#64;surge_sh</span>. Custom domains on the free plan is a big +1 for me.</p>
                    <div className='flex flex-row h-[80px] py-4'>
                        <div>
                            <img  src={men4} className='h-full'/>
                        </div>
                        <div className='pl-3'>
                            <h4 className='font-medium text-[10px] text-gray'>&#x268A;Dominick</h4>
                            <p className="text-[12px] italic">Developer & IT Techie</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}