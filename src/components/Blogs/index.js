import {Link} from 'react-router-dom'
import logo192 from '../../../src/logo512.png'
import './index.css'

const objectBlog =[
    {
    id:0,
    subHeading:'Framework Components: The specific benefit the AI application delivers',
    case1:'Use Case 1 (Professional Services): Saves 1 day per week for project managers by automating document reviews.',
    case2 :'Use Case 2 (Retail Procurement): Reduces manual processing, enhancing efficiency in item restocking.',
    case3:'Use Case 3 (Consumer Goods): Saves 1 hour per day for store managers with AI-generated recommendations.',
    },
    {
    id:1,
    subHeading:'Business Application: The practical implementation of the AI solution.',
    case1:'Use Case 1: Contract lifecycle management.',
    case2:'Use Case 2: Procurement restocking processes.',
    case3:'Use Case 3: AI-based recommendation systems for sales optimization.'
    },
    {
    id:2,
    subHeading:'AI Engine: The core AI capabilities used.',
    case1:'Use Case 1: Summarization and contextual analysis.',
    case2:'Use Case 2: Demand forecasting and pattern recognition.',
    case3:'Use Case 3: Personalized recommendations and data insights.',
    },
    {
    id:3,    
    subHeading:'Model & Task: Specific models and their purpose.',
    case1:'Use Case 1: Natural language models for contract summarization.',
    case2:'Use Case 2: Time-series models for restocking predictions.',
    case3:'Use Case 3: Recommendation engines leveraging customer behavior data.',
    },
    {
    id:4,
    subHeading:'Data: Type of data powering the models.',
    case1:'Use Case 1: Contract documents and textual data.',
    case2:'Use Case 2: Supplier and inventory data.',
    case3:'Use Case 3: Sales history and user preferences.',
    },
    {
    id:5,
    subHeading:'MLOps: Operationalizing machine learning.',
    case1:'Use Case 1: SAP AI Launched.',
    case2:'Use Case 2: SAP AI Business Services integration with procurement systems.',
    case3:'Use Case 3: Continuous retraining using SAP Data Intelligence.',
    },
    {
    id:6,
    subHeading:'AI Ethics: Ensuring responsible AI use.',
    case1:'Use Case 1: AI fairness in contract reviews.',
    case2:'Use Case 2: Transparent and bias-free decision-making for restocking.',
    case3:'Use Case 3: Ethics-driven personalization in sales recommendations.',
    },
]

const Blogs = () =>(
    <div className='blogs-container'>
        <div className='blogs-main-container'>
        </div>
        <div className="blog-navbar">
            <img src={logo192} alt='logo' className='logo-element-blog'/>
            <Link to='/' className='link-elmement-blog-home'>
                <h1 className='blogs-home'>Home</h1>
            </Link>
        </div>
        <div className='blog-container-second'>
            <img src='http://i.huffpost.com/gen/4464364/images/o-BLOG-facebook.jpg' alt='blog' className='blog-image' />
            <div className='blogs-sec-container'>
                <h1 style={{alignSelf:'center' ,fontSize:'30px',color:'#020f25'}}>WYGE Thoughts and Stories</h1>
                <hr style={{backgroundColor:'#0000000',width:'100%'}} />
                <div>
                <h1 style={{fontSize:'20px'}}>SAP Business AI use cases across three industries—Professional 
                    Services, Retail Procurement, and Consumer Goods—mapped to a 
                    comprehensive framework. Here's the detailed explanation:
                </h1>
                <ul className='ul-elements-blog'>
                {objectBlog.map(eachItem=>(
                    <li className='list-element-blog' key={eachItem.id}>
                        <p>
                            <strong>{eachItem.subHeading}</strong>
                        </p>
                        <p>
                            {eachItem.case1}
                        </p>
                        <p>
                            {eachItem.case2}
                        </p>
                        <p>
                            {eachItem.case3}
                        </p>
                    </li>
                ))}
                </ul>
                <p>This structured framework showcases the scalability and 
                    industry-specific AI applications while addressing the technical 
                    and ethical considerations essential for deployment.</p>
                <hr style={{backgroundColor:'#0000000',width:'100%'}} />
                <h1 style={{fontSize:'20px',flexWrap:'wrap'}}>🚀 SAP Generative AI: Transforming 
                    Businesses with Grow with SAP & RISE with SAP 🌟</h1>
                <p>SAP Generative AI is revolutionizing how businesses of all sizes accelerate their digital 
                    transformation. Here's how it's empowering Grow with SAP and RISE with SAP:
                    <br/>
                    <br/>
                    <strong>Grow with SAP:</strong> Enabling SMEs to Scale
                    <br/>
                    <br/>
                    Smart Automation: Auto-generate workflows and optimize resource management.
                    Conversational AI: Natural, context-aware support for faster onboarding and operations.
                    AI Insights: Automated financial summaries and growth predictions.
                    Tailored Marketing: Personalized campaigns and sales proposals.
                    <br/>
                    <br/>
                    <strong>RISE with SAP:</strong> Redefining Enterprise Operations
                    <br/>
                    <strong>Accelerated Migration:</strong> Automate code conversion and streamline SAP S/4HANA transitions.
                    <br/>
                    <strong>Generative Analytics:</strong> Predictive insights and scenario planning for strategic growth.
                    <br/>
                    <strong>Intelligent Workflows:</strong> AI-driven process optimization and custom recommendations.
                    <br/>
                    <strong>Enhanced Collaboration:</strong> AI-powered knowledge graphs for smarter business connections.
                    <br/>
                    <br/>
                    With SAP Generative AI, businesses can achieve unparalleled efficiency, 
                    personalization, and innovation. Ready to harness the power of AI for your 
                    transformation journey? Let's talk! 🤖✨
                </p>
                </div>
                <hr style={{backgroundColor:'#0000000',width:'100%'}} />
                <div>
                <h1>🚀 Unveiling the Power of SAP Knowledge Graph for Enterprises in 2025 🌐</h1>
                <p>In today’s data-driven world, businesses need more than just data—they need connected insights. The SAP Knowledge Graph is transforming how enterprises manage and interlink data across domains, creating a unified, contextual view of their operations.
                    Why it Matters:
                    <br/>
                    <br/>
                    1️⃣ <strong> Enhanced Data Connectivity: </strong> Integrates data from ERP, CRM, IoT, and more.<br/><br/>
                    2️⃣ <strong>Smarter AI Applications:</strong> Adds context for precise AI-driven recommendations.<br/><br/>
                    3️⃣ <strong>Faster Decision-Making:</strong> Reveals hidden relationships within data.<br/><br/>
                    4️⃣ <strong>Streamlined Compliance:</strong> Simplifies audits with transparent, connected data.<br/><br/>
                    5️⃣ <strong>Future-Ready Enterprises:</strong> Scalable solutions for an interconnected digital ecosystem.<br/><br/>

                    💡 In 2025, SAP Knowledge Graph is poised to be a cornerstone for smarter, more agile enterprises.<br/><br/>

                    Curious how this innovation can shape your business? Explore the possibilities and lead the data revolution!
                </p>

                </div>
                <hr style={{backgroundColor:'#0000000',width:'100%'}} />
                <div>
                <h1 style={{fontSize:'20px',flexWrap:'wrap'}}>🚀 SAP Generative AI Development Simplified: BAS vs. Build Code vs. Build Apps</h1>
                <p>SAP offers powerful tools for app development tailored to different audiences:<br/><br/>
                    1️⃣ <strong>SAP Business Application Studio (BAS):</strong><br/><br/>
                    For professional developers building complex, enterprise-grade apps. Think full-code development with advanced debugging, Git integration, and support for Fiori, CAP, and UI5.
                    <br/><br/>
                    2️⃣ <strong>SAP Build Code:</strong><br/><br/>
                    The middle ground for developers and citizen developers. Enables low-code customizations and extensions of SAP apps using templates and reusable components.
                    <br/><br/>
                    3️⃣ <strong>SAP Build Apps:</strong><br/><br/>
                    Empowering citizen developers to create apps with a no-code/low-code drag-and-drop interface. Perfect for rapid prototyping and lightweight workflows.
                    <br/><br/>
                    <strong>Key takeaway:</strong> SAP tools cater to all skill levels—whether you're coding like a pro or just starting out. Choose the right tool to transform ideas into impactful business solutions!
                </p>
                <img src='https://media.licdn.com/dms/image/v2/D5622AQGFZW0_OQphVQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1732027235179?e=1735171200&v=beta&t=MpNRFSIExxVqAwOLrl9Id5kRb4IFlECXmKeyKgRukvQ' className='image-blog' alt='table' />
                </div>
                <hr style={{backgroundColor:'#0000000',width:'100%'}} />
                <div>
                <h1>Generative AI vs Predictive AI vs Prescriptive AI: Key Roles for Enterprises in 2025</h1>
                <p>In 2025, enterprises will integrate generative, predictive, and prescriptive AI to drive innovation, 
                    decision-making, and optimization:
                    <br/>
                    <br/>
                    1️⃣ <strong>Generative AI:</strong> Creates new content like text, designs, or synthetic data. Ideal for marketing personalization, rapid prototyping, and accelerating innovation.
                    <br/>
                    <br/>
                    2️⃣ <strong>Predictive AI:</strong> Analyzes historical data to forecast trends, customer behavior, and risks, empowering businesses with actionable insights.
                    <br/>
                    <br/>
                    3️⃣ <strong>Prescriptive AI:</strong> Recommends specific actions, optimizing logistics, resource allocation, and strategy execution in dynamic environments.
                    <br/>
                    <br/>
                    🔑 <strong>The Future:</strong> Businesses will combine these AI types to transform workflows—from ideation (Generative AI) to prediction (Predictive AI) and decision-making (Prescriptive AI). Enterprises leveraging this trifecta will gain a strategic edge in agility and innovation.
                </p>
                </div>
                <hr style={{backgroundColor:'#0000000',width:'100%'}} />
                <div>
                <h1>🚀 RISE with SAP vs. Grow with SAP: Which One Fits Your Business?</h1>
                <p>RISE with SAP: Ideal for enterprises seeking end-to-end digital transformation. 
                    It’s a complete package with SAP S/4HANA Cloud, business process intelligence, 
                    and tools for flexibility and customization. Perfect for large-scale operations 
                    needing tailored solutions.
                    <br/>
                    <br/>
                    Grow with SAP: Designed for small and mid-sized businesses ready to scale quickly. 
                    Focuses on rapid adoption of SAP S/4HANA Public Cloud using pre-configured best 
                    practices. A cost-effective, faster solution for businesses with simpler needs.
                    <br/>
                    <br/>
                    <strong>Key Difference:</strong><br/>
                    <br/>
                    <strong>RISE:</strong> Comprehensive transformation with flexibility.<br/>
                    <strong>Grow: </strong> Fast cloud ERP adoption with pre-set templates.<br/>
                    <br/>
                    Choose the one that aligns with your business scale and goals!
                </p>
                </div>
                <hr style={{backgroundColor:'#0000000',width:'100%'}} />
                <div>
                <h1>Unlocking Business Potential with SAP Joule</h1>
                <p>SAP Joule, the AI copilot, is transforming businesses across industries with real-time insights 
                    and decision-making capabilities. Here's how its use cases stack up:
                    <br/>
                    <br/>
                    📦 <strong>Supply Chain Optimization (20%):</strong> Predict demand, manage inventory, and tackle disruptions efficiently.<br/>
                    💰 <strong>Financial Management (15%):</strong> Gain actionable insights on cash flow, cost control, and compliance.<br/>
                    📊 <strong>Sales & Marketing (15%):</strong> Personalize campaigns, enhance customer experiences, and optimize pricing.<br/>
                    🏭 <strong>Manufacturing & Operations (15%):</strong> Ensure smooth processes with predictive maintenance and quality control.<br/>
                    👩‍💼 <strong>Human Resources (10%):</strong> Streamline hiring, engagement, and workforce planning.<br/>
                    🌱 <strong>Sustainability (10%):</strong> Achieve ESG goals with carbon footprint tracking and sustainable sourcing.<br/>
                    🛒 <strong>Retail & E-commerce (10%):</strong> Deliver personalized recommendations and dynamic promotions.<br/>
                    📈 <strong>Strategic Decision-Making (5%):</strong> Plan for the future with scenario planning and risk mitigation.<br/>
                    <br/>
                    <br/>
                    SAP Joule empowers businesses to work smarter, optimize resources, and make data-driven decisions.
                    How do you see SAP Joule impacting your industry? Let's discuss!
                </p>
                </div>
                <hr style={{backgroundColor:'#0000000',width:'100%'}} />
                <p  style={{marginBottom:'20px',alignSelf:'end',margin:'20px',fontSize:'23px'}}>...more</p>
            </div>
        </div>
    </div>
)

export default Blogs