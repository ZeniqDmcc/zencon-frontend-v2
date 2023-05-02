import Navbar from "../components/Navbar/Navbar"
import FaqAccordion from '../components/Accordion/FaqAccordion'

const Faq = () => {
    return (
        <div className="bg-[#010020]">
            <Navbar />
            <div className="pt-40 pb-16 max-w-2xl mx-auto">
                <h1 className="text-center text-4xl font-bold text-[#fff] pb-4">FAQ</h1>
                <div className="">
                    {faqs.map((faq, index) => (
                        <FaqAccordion key={index} title={faq.title} content={faq.content} social_media={faq.social_media} list={faq.list} />
                    ))}
                </div>
            </div>
        </div>
    );
};


const faqs = [
    {
        "title": 'What is ZENCON?',
        "content": "ZENCON is a yearly hackathon event where developers meet & collaborate in a productive, fun, and exciting to jointly solve problems and innovate across multiple categories. ZENCON's goal is to create value for the blockchain community – while having a lot of fun in great locations around the world!"
    },
    {
        "title": "What is a hackathon?",
        "content": "A hackathon is a single or multi-day \"hacking\" competition where individuals and/or teams are faced with a number of challenges. The hackathon is an essential part of ZENCON, where you and your team will receive a set amount of time to complete your projects before presenting it to the jury and all other participants. This year's ZENCON hackathon runs from September 16 to 20 in Rio de Janeiro, Brazil. We want to find out: What models can blockchain-based networks create as an alternative to digital monopolies? What innovation networks and services can be developed in the areas of mobility, industry, and finance?"
    },      
    {
        "title": "What is the ZENCON hackathon about?",
        "content": "ZENCON’s main purpose is encourage developers to work on problems we face in technology. Five challenges are provided to generate new product concepts:",
        "list": [
          {
            "item":"Decentralized Finance DeFi & DeFi 2.0"
          },
          {
            "item":"NFTs / Metaverse / Web 3.0"
          },
          {
            "item":"Development of  the ZENIQ ecosystem & existing projects"
          },
          {
            "item":"New advanced & developed projects (Pro Level)"
          },
          {
            "item":"ZENIQ Smart Chain Migration/Integration (Pro Level)"
          }
        ]
    },
    {
        "title": "Where can I see testimonials from prior ZENCON events?",
        "content": "You can follow us on the official social media channels:",
        "social_media": [
          {
            "platform": "Facebook",
            "url": "https://www.facebook.com/zenconhackathon"
          },
          {
            "platform": "Instagram",
            "url": "https://www.instagram.com/zencon.io/"
          },
          {
            "platform": "LinkedIn",
            "url": "https://www.linkedin.com/company/zencon-hackathon"
          },
          {
            "platform": "Discord",
            "url": "https://discord.gg/YfM7ZZG5Wz"
          }
        ]
    },
    {
        "title": "Who is behind ZENCON",
        "content": "ZENCON is sponsored by ZENIQ DMCC, Dubai, United Arab Emirates."
    },
    {
        "title": "Who can participate in ZENCON?",
        "content": "You! If you are a blockchain developer, web technology enthusiast or smart contract expert, we encourage you to apply and join us in Rio de Janeiro! Please note that your skills & knowledge should be of an advanced level. ZENCON is not a coding school."
    },      
    {
        "title": "Eligibility criteria for participating in ZENCON",
        "content": "We ask all potential participants to complete our registration form and submit a project page. Also, please add a 1-minute video about your project and proposed solution & roadmap. Your project proposal needs to fall into one of our five challenge categories. Above all, we are looking for enthusiasts who believe in the power of blockchain technology who are willing to push their project across the finish line at ZENCON. Each team should have at least one developer with a proven record of blockchain and/or web technology solutions. A team can be made of between 2 and 6 members."
    },
    {
        "title": "How do I register for ZENCON?",
        "list": [
          {
            "item":"Download the NOMO app to your mobile device "
          },
          {
            "item":"Go to the ZENCON Launchpad at launchpad.zencon.io"
          },
          {
            "item":"Click on “Register”, a QR code will be displayed"
          },
          {
            "item":"In the NOMO app, go to “Scan” and scan the QR code on the Launchpad page"
          },
          {
            "item":"Once connected, you’ll be able to see the registration form, fill it then click on submit."
          }
        ]
    },
    {
        "title": "Is it ZENCON open to the public?",
        "content": "Registration is open to the public, but participation in ZENCON is by invitation only."
    },
    {
        "title": "What can I expect as a ZENCON attendee?",
        "content": "The objective of ZENCON is to showcase the power of the ZENIQ Smart Chain, and promote cooperation between developers, technology providers and the global blockchain community, including potential partners and sponsors. In the time leading up to ZENCON, participants can network through the launchpad. So, essentially, ZENCON is a great way to:",
        "list": [
            {
              "item":"Showcase your skills."
            },
            {
              "item":"Learn about ZENIQ ecosystem solutions."
            },
            {
              "item":"Be part of the next generation of digital asset management community."
            },
            {
              "item":"Explore and create decentralized solutions using the ZENIQ ecosystem."
            },
          ]
    },
    {
        "title": "Last date for registration",
        "content": "You can register until July 17, 2023 at 11:59 p.m."
    },
    {
        "title": "Rejection Email for Non-Accepted Projects",
        "content": "Yes, all projects will be informed if they are selected or not."
    },
    {
        "title": "Resubmission of Project for Reconsideration",
        "content": "No, once the selection phase is closed, there is no possibility to resubmit your project."
    },
    {
        "title": "ZENCON Schedule",
        "content": "ZENCON Rio de Janeiro will take place from September 16 - 20, 2023. The ZENCON hackathon starts on the second day of the event week and runs from September 17 - 20, 2023 over 68 hours."
    },
    {
        "title": "What should I bring to ZENCON?",
        "content": "A lot of energy, your innovative ideas, your computer, and your trusted team!"
    },
    {
        "title": "I cannot afford to travel. How do I still participate?",
        "content": "Please contact hello@zencon.io, we are considering offering a limited number of ZENCON travel support packages. Please note that ZENCON does not promise or guarantee any kind of travel support. All participants must be legally allowed to travel and have all necessary documentation ready to enter the country of Brazil. Please check with your local authorities or the Visit Brazil website to find more information."
    },
    {
        "title": "Is there a rulebook/handbook I should follow?",
        "content": "Yes, all the information will be available on the ZENCON website."
    },
    {
        "title": "Can I bring a companion to the event?",
        "content": "Unfortunately not, we cannot accept guests of ZENCON participants. Only selected participants can attend ZENCON."
    },
    {
        "title": "Will there be any support or resources available during the ZENCON?",
        "content": "Yes, ZENCON staff will be available to:",
        "list": [
            {
              "item":"Support the onsite registration process of participants."
            },
            {
              "item":"Support participants if they have questions."
            },
            {
              "item":"Guide participants to their ZENCON mentors if they have technical questions that ZENCON staff cannot answer."
            }
          ]
    },
    {
        "title": "What are the judging criteria for ZENCON?",
        "content": "Projects will be evaluated according to different elements, and also how your idea can be turned into a real-world start up project.",
        "list": [
            {
              "item":"Does the project have business value?"
            },
            {
              "item":"Does the project contribute to the community?"
            },
            {
              "item":"Is this idea going to make money or contribute to the solution that will?"
            },
            {
              "item":"Have the team innovated to build this product?"
            },
            {
              "item":"How innovative and realistic is the idea?"
            },
            {
              "item":"How aware is the team of how others are attempting to solve the same problem?"
            },
            {
              "item":"Solution quality & usability"
            },
            {
              "item":"Technology usage & maturity – is it realistic?"
            },
            {
              "item":"Does the presentation clearly define and address the project?"
            },
            {
              "item":"Prototype, if available"
            },
        ]
    },
    {
        "title": "What should I do if I have additional titles or need help during ZENCON?",
        "content": "You can always seek help, by searching for one of the on-site ZENCON staff members or mentors, and they will gladly assist you with your inquiry."
    },
    {
        "title": "Are there any prizes for the winners of ZENCON?",
        "content": "Yes, five teams will get a prize reward of 20.000 USDT each."
    },
    {
        "title": "Who is in the ZENCON jury?",
        "content": "The jury consists of seven members and will be announced closer to the event date."
    },
    {
        "title": "Food and Beverages at ZENCON",
        "content": "Yes, accommodation and meals (breakfast, lunch, and dinner) are included for all participants of ZENCON Rio 2023."
     },
     {
        "title": "When will the jury announce the results?",
        "content": "The winning teams will be announced on the last day of ZENCON."
     },     
     {
        "title": "What are the channels I can use to get in touch with the mentors?",
        "content": "Discord: https://discord.gg/YfM7ZZG5Wz."
    },
    {
        "title": "Can I have a contact for someone in the event?",
        "content": "Our on-site helpers, mentors, and ZENCON staff will do their best to guide you and assist you with all your inquiries. General titles can be addressed to hello@zencon.io."
    },
    {
        "title": "Where can I find the ZENCON schedule? ",
        "content": "You can find the event schedule on the website XX.",
        "list": [
            {
              "item":"September 16, 2023: Hotel check in & ZENCON Opening & Welcome."
            },
            {
              "item":"September 17, 2023: ZENCON Presentation & Start of ZENCON Hackathon."
            },
            {
              "item":"September 18, 2023: ZENCON Hackathon & Workshops."
            },
            {
              "item":"September 19, 2023: ZENCON Hackathon & Workshops."
            },
            {
              "item":"September 20, 2023: End of ZENCON Hackathon, Pitch Sessions & Awards."
            },
            {
              "item":"September 21, 2023: Hotel check out."
            },
        ]
    }
];

export default Faq;

