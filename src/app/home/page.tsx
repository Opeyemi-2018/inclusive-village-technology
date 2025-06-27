import HomeSectionEight from "@/components/home-section/HomeSectionEight"
import HomeSectionFive from "@/components/home-section/HomeSectionFive"
import HomeSectionFour from "@/components/home-section/HomeSectionFour"
// import HomeSectionNine from "@/components/home-section/HomeSectionNine"
import HomeSectionOne from "@/components/home-section/HomeSectionOne"
import HomeSectionSeven from "@/components/home-section/HomeSectionSeven"
import HomeSectionSix from "@/components/home-section/HomeSectionSix"
import HomeSectionThree from "@/components/home-section/HomeSectionThree"
import HomeSectionTwo from "@/components/home-section/HomeSectionTwo"

const HomePage = () => {
    return (
        <div>
            <HomeSectionOne />
            <HomeSectionTwo />
            <HomeSectionThree />
            <HomeSectionFour />
            <HomeSectionFive />
            <HomeSectionSix />
            <HomeSectionSeven />
            <HomeSectionEight />
            {/* <HomeSectionNine /> */}
        </div>
    )
}

export default HomePage