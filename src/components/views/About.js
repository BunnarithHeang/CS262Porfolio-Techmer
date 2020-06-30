import React, { Component } from 'react'
import img from '../../images/pic02.jpg'
import BreadCrumb from './universal_components/BreadCrumb'
import MainFeaturedPost from './aboutUs/MainFeaturedPost'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Section3 from "./aboutUs/Section3"
import Section2 from "./aboutUs/Section2"
import Section1 from "./aboutUs/Section1"
import Grid from '@material-ui/core/Grid'

 
const mainFeaturedPost = {
    title: 'TechFinder',
    titleheading: '123123',
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sapien massa, rhoncus ac scelerisque nec, rutrum ut odio. Vestibulum commodo elit sed massa placerat, eget malesuada odio malesuada. Pellentesque vel est sagittis, elementum felis in, ornare mi. Ut facilisis dictum gravida. Duis dolor enim, gravida eu sapien et, blandit commodo diam. Donec auctor efficitur consequat. Suspendisse vel bibendum ligula, nec rhoncus nulla. Aliquam non urna eget nulla consectetur auctor sit amet et tellus. Mauris tempor, nibh eget sagittis pharetra, tortor dolor vestibulum dui, et placerat odio lorem vel arcu. Phasellus nec sodales metus. Morbi justo lorem, hendrerit sit amet egestas vitae, gravida id lectus. Nam tempor fringilla ligula, in vulputate dolor blandit quis.",
    image: `url(${img})`,
    imgText: 'main image description',
    linkText: 'Continue reading…',
};
export default class About extends Component {
    render() {
        return (
            <React.Fragment>
                <BreadCrumb pageName={"Product Name Here"}/>
                <CssBaseline />
                    <Container maxWidth="lg">
                        <main>
                            <MainFeaturedPost post={mainFeaturedPost} />
                            <div className="row">
                                <Section1 post={mainFeaturedPost}/>
                            </div>
                            <Grid spacing={4}>
                                <Section2 />
                            </Grid>
                            
                            <Grid spacing={4}>
                                <Section3 />
                            </Grid>
                        </main>
                    </Container>
            </React.Fragment>
        )
    }
}