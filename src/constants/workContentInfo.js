import work1 from '../img/work1.jpg';
import work2 from '../img/work2.jpg';
import work3 from '../img/work3.jpg';
import photo_1 from '../img/tvb_0109.jpg';
import work1_sub_1 from '../img/work-nailish-1.png'
import work2_sub_1 from '../img/work-portfolio-1.png';
import work3_sub_1 from '../img/island-web.png';


export const workContents = {
  1: {
    itemNum: 1, 
    imgUrl: work1,
    url: "work1",
    title: "Nailish",
    disc: "iOS Project",
    subTitle: "Simple for Nail Technician",
    discText: "Nailish can manage your customers for nail technician. No need to keep track your customer report with paper and pen. All you need is your iPhone and this app. Schedule your appointments and your bookings on the go.",
    role: "iOS Development & Design & Plannig",
    development: ["iOS", "Xcode", "Git", "AdobeXD", "Carthage", "CoreData", "Trello"],
    links: { 
      WebSite: "https://nailish.work/",
      Medium:  "https://medium.com/@amaginqoo"
    },
    subImages: {
      appImage: work1_sub_1, 
    }
  }, 
  2: {
    itemNum: 2,
    imgUrl: work2,
    url: "work2",
    title: "Portfolio",
    disc: "React Project",
    subTitle: "Presonal Portfolio",
    discText: "This is my portfolio project with React.js. This website is not only a showcase of my work and skills, but also getting knowledge of React with animation. ",
    role: "Web Development & Design & Plannig",
    development: ["React", "SCSS", "Git", "JavaScript","HTML", "CSS", "Affinity Designer", "AdobeXD", "Netlify"],
    links: {
      WebSite: "https://shota-iwamoto.work/"
    },
    subImages: {
      webImage: work2_sub_1,
    }
  },
  3: {
    itemNum: 3,
    imgUrl: work3,
    url: "work3",
    title: "Islandex",
    disc: "WordPress Project",
    subTitle: "",
    discText: "Islandex provides specialized moving services especially between island and mainland in Japan. Their services are included supply and distribution line, real estate, design, revitalize the community. In order to offer company information, it's built by WordPress without template. Implement from HTML and customized easy to use for client.",
    role: "WordPress Development",
    development: ["WordPress", "jQuery", "Git", "HTML", "CSS"],
    links: {
      WebSite: "https://islandex.co.jp/",
    },
    subImages: {
      webImage: work3_sub_1,
    }
  }
};

export const aboutImages = [
  {
    url: photo_1,
    itemNum: 1, 
  }
]