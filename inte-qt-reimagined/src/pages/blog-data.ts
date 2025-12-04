export interface BlogType {
  id: number;
  slug: string;
  img: string;
  author: string,
  title: string;
  excerpt: string;
  date: string;
  category: string
}

export const blogData: BlogType[] = [
    {
      id:1,
     slug:"how-mpl-works",
      img: "https://imgur.com/QihDOBg.jpg",
      title: "How MPLS Works and Why Enterprises Still Use It",
      excerpt:
        "In the era of cloud networking, SD-WAN, and 5G.MPLS (Multiprotocol Label Switching) remains one of the most reliable and widely used technologies for enterprise networks",
      author: "Ashok Jangir",
      date: "March 10, 2025",
      category: "SDWAN/ 5G/ MPLS/ Latency"

    },
    {
       id:2,
      slug:"how-automation-transforms-accounting",
      img: "https://imgur.com/s22KYx4.jpg",
      title: "How Automation Transforms Accounting",
      excerpt:
        "In today's fast-paced business environment, efficiency and accuracy are essential to maintaining smooth operations",
      author: "Aditya Pratap Singh",
      date: "March 01, 2025",
      category: "Accounting Automation / Invoice Generation / Payment Tracking"
    },
    {
       id:3,
        slug:"digital-lock-and-key-authentication-protects-you",
      img: "https://imgur.com/pGrGv2I.jpg",
      title: "Digital Lock & Key: How Authentication Protects You!",
      excerpt:
        "In today's digital landscape, securing user data and managing authentication efficiently are critical for any web application.",
      author: "Akansha Yadav",
      date: "February 22, 2025",
      category: "Smart Auth Framework / Adaptive Security / Auth N Revolution",
    },
    {
       id:4,
        slug:"find-the-best-partners-with-inte-qt",
      img: "https://imgur.com/VP44Lj1.jpg",
      title: "Find the Best Partners with inte-QT",
      excerpt:
        "When securing reliable internet services, SD-WAN CPEs, and high-capacity point-to-point connections",
      author: "Krisztian Poti",
      date: "February 17, 2025",
      category: "Supplier Relationship / SD-WAN / Global Connectivity / Regional Suppliers",
      
    },
    {
       id:5,
        slug:"day-in-the-life-of-a-nsoc-engineer",
      img: "https://imgur.com/gLQx19w.jpg",
      title: "Day in the Life of a NSOC Engineer!",
      excerpt:
        "Ever thought about who's responsible for making the internet run smoothly while we stream, browse, and work?",
      author: "Syed Adnan Ali",
      date: "February 03, 2025",
      category: "NSOC Engineer/ Networking/ Network Operations/ SLA",
     
    },
    {
      id:6,
        slug:"why-choose-inte-qt-more-than-just-internet-access",
      img: "https://i.imgur.com/pr0MQQF.jpg",
      title: "Why Choose inte-QT: More Than Just Internet Access",
      excerpt:
        "In today’s fast-paced world, having access to reliable internet isn’t just a necessity—it’s the foundation of successful operations, seamless communication, and efficient application performance",
      author: "Gaurav Daga",
      date: "January 24, 2025",
      category: "Global internet access provider / Application-sensitive internet solutions",
      
    },
    {
       id:7,
        slug:"advantages-of-real-time-communication",
      img: "https://imgur.com/ipFZeOo.jpg",
      title: "Advantages of Real-Time Communication",
      excerpt:
        "In today's digital landscape, securing user data and managing authentication efficiently are critical for any web application.",
      author: "Karuna Tyagi",
      date: "January 18, 2025",
      category: "Communication / Build relations / Replying in real time",
    },
    {
       id:8,
        slug:"importance-of-service-level-agreement",
      img: "https://imgur.com/orxOqxn.jpg",
      title: "Importance of Service Level Agreement",
      excerpt:
        "In today's digital landscape, securing user data and managing authentication efficiently are critical for any web application.",
      author: "Ashish Manju",
      date: "January 18, 2025",
      category: "Service level agreement / Performance Indicators / Quality service",
    },
    {
       id:9,
        slug:"data-insights-with-excel",
      img: "https://imgur.com/Xbe82HX.jpg",
      title: "Data Insights with Excel",
      excerpt:
        "In today’s data-driven world, the ability to understand, analyze, and visualize data is more important than ever, and Excel stands out as a go-to tool for data analysis",
      author: "Sakshi Agarwal",
      date: "january 13, 2025",
      category: "Data Analysis / Data Visualization / Excel Functions",
    },
    {
       id:10,
        slug:"seo-strategies-for-website-success",
      img: "https://imgur.com/jHNZX2E.jpg",
      title: "SEO Strategies for Website Success",
      excerpt:
        "In today’s digital-first world, simply having a website is no longer enough",
      author: "Akansha Yadav",
      date: "January 03, 2025",
      category: "SERP Domination / Link Equity / Crawl Efficiency",
    },
    {
       id:11,
        slug:"proactive-vs-reactive-monitoring-in-the-nsoc",
      img: "https://imgur.com/mJ6XKa0.jpg",
      title: "Proactive vs. Reactive Monitoring in the NSOC",
      excerpt:
        "In today's digital landscape, securing user data and managing authentication efficiently are critical for any web application.",
      author: "Dopender Bhardwaj",
      date: "January 02, 2025",
      category: "NSOC Monitoring Tools / Network Performance Monitoring / Network Monitoring Solutions",
     
    },
    {
       id:12,
        slug:"scaling-with-grafana",
      img: "https://imgur.com/BWfo75g.jpg",
      title: "Scaling with Grafana",
      excerpt:
        "In today’s fast-paced digital world, downtime is not just inconvenient – it can be costly.",
      author: "Sourabh Purohit",
      date: "February 22, 2025",
      category: "Grafana / Monitoring Tool / Data Visualization / NSOC",
    },
    {
       id:13,
        slug:"transforming-lives-with-technology",
      img: "https://imgur.com/Q9CAlyz.jpg",
      title: "Transforming Lives With Technology",
      excerpt:
        "The internet is the global system architecture used to interconnect computer networks",
      author: "Daniel Jose Rodriguez Mendez",
      date: "October 28, 2022",
      category: "Intro / Telecom / AI",
    },
    {
       id:14,
        slug:"internet-of-things-what-is-iot",
      img: "https://imgur.com/mdrh8gQ.jpg",
      title: "Internet of Things: What is IoT?",
      excerpt:
        "The Internet of Things (IoT) is driving many of today’s most significant technological advancements",
      author: "Ashish Nankani",
      date: "March 07, 2022",
      category: "Intro / IOT / Applications",
    },
    {
       id:15,
        slug:"our-access-makes-it-strong-sd-wan",
      img: "https://imgur.com/7CgnyPK.jpg",  ///
      title: "Our Access Makes it STRONG: SD-WAN",
      excerpt:
        "We, inte-QT, an enabler of connectivity and communication solutions for businesses, provide managed internet access services to SD-WAN solution providers.",
      author: "Mohammed Arshad",
      date: "October 27, 2021",
      category: "Intro / Mechanism / Benefits",
    },
    {
       id:16,
        slug:"how-automation-transforms-accounting",
      img: "https://imgur.com/pGrGv2I.jpg",
      title: "Digital Lock & Key: How Authentication Protects You!",
      excerpt:
        "In today's digital landscape, securing user data and managing authentication efficiently are critical for any web application.",
      author: "Akansha Yadav",
      date: "February 22, 2025",
      category: "Smart Auth Framework / Adaptive Security / Auth N Revolution",
    },
    {
       id:17,
        slug:"how-automation-transforms-accounting",
      img: "https://imgur.com/pGrGv2I.jpg",
      title: "Digital Lock & Key: How Authentication Protects You!",
      excerpt:
        "In today's digital landscape, securing user data and managing authentication efficiently are critical for any web application.",
      author: "Akansha Yadav",
      date: "February 22, 2025",
      category: "Smart Auth Framework / Adaptive Security / Auth N Revolution",
    },
    {
       id:18,
        slug:"how-automation-transforms-accounting",
      img: "https://imgur.com/pGrGv2I.jpg",
      title: "Digital Lock & Key: How Authentication Protects You!",
      excerpt:
        "In today's digital landscape, securing user data and managing authentication efficiently are critical for any web application.",
      author: "Akansha Yadav",
      date: "February 22, 2025",
      category: "Smart Auth Framework / Adaptive Security / Auth N Revolution",
    },
    {
       id:19,
        slug:"how-automation-transforms-accounting",
      img: "https://imgur.com/pGrGv2I.jpg",
      title: "Digital Lock & Key: How Authentication Protects You!",
      excerpt:
        "In today's digital landscape, securing user data and managing authentication efficiently are critical for any web application.",
      author: "Akansha Yadav",
      date: "February 22, 2025",
      category: "Smart Auth Framework / Adaptive Security / Auth N Revolution",

    },

];