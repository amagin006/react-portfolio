import work1 from '../img/work1.jpg';
import work2 from '../img/work2.jpg';
import work3 from '../img/work3.jpg';
import photo_1 from '../img/tvb_0109.jpg';


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
    development: ["iOS", "Xcode", "Git", "AdobeXD", "Carthage", "CoreData"],
    links: { 
      WebSite: "https://nailish.work/",
      Medium:  "https://medium.com/@amaginqoo"
    },
  }, 
  2: {
    itemNum: 2,
    imgUrl: work2,
    url: "work2",
    title: "Portfolio",
    disc: "React Project",
    subTitle: "Presonal Portfolio",
    discText: "This is my presonal portfolio.",
    role: "Web Development & Design & Plannig",
    development: ["React", "SCSS", "Git", "AdobeXD", "Netlify"],
    links: {

    },
  },
  3: {
    itemNum: 3,
    imgUrl: work3,
    url: "work3",
    title: "Islandex",
    disc: "WordPress Project",
    subTitle: "",
    discText: "Moving services web site",
    role: "Web Development",
    development: ["WordPress", "jQuery", "Git"],
    links: {
      WebSite: "https://islandex.co.jp/",
    }
  }
};

export const aboutImages = [
  {
    url: photo_1,
    itemNum: 1, 
  }
]