import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }),
);


export default function Section3(props) {
    const classes = useStyles();
        return (
            <React.Fragment>
                <div className="container">
                    <div className="container">
                        <div className="section-title text-center">
                            <h2>Our Team</h2>
                        </div>
                    </div>
                    
                    <div id="accordion col-md-8">
                        <div class="card">
                        <div class="card-header" role="tab" id="bunnarithHead">
                                <div className={classes.root}>
                                    <Avatar alt="Remy Sharp" src="" className={classes.large} />
                                </div>
                            <div className="">
                                <h3 class="mb-0">
                                
                                <a
                                    data-toggle="collapse"
                                    data-target="#bunnarith"
                                >
                                    Bunnarith <small>UI/Ux Design</small>
                                </a>
                                </h3>
                            </div>
                        </div>

                        <div class="collapse " id="bunnarith" data-parent="#accordion">
                            <div class="card-body">
                            <h5 class="d-none d-sm-block">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sapien massa, rhoncus ac scelerisque nec, rutrum ut odio. Vestibulum commodo elit sed massa placerat, eget malesuada odio malesuada. Pellentesque vel est sagittis, elementum felis in, ornare mi. Ut facilisis dictum gravida. Duis dolor enim, gravida eu sapien et, blandit commodo diam. Donec auctor efficitur consequat. Suspendisse vel bibendum ligula, nec rhoncus nulla. Aliquam non urna eget nulla consectetur auctor sit amet et tellus. Mauris tempor, nibh eget sagittis pharetra, tortor dolor vestibulum dui, et placerat odio lorem vel arcu. Phasellus nec sodales metus. Morbi justo lorem, hendrerit sit amet egestas vitae, gravida id lectus. Nam tempor fringilla ligula, in vulputate dolor blandit quis.
                                <em
                                >Everything that runs, wins, and everything that stays,
                                pays!</em>
                            </h5>
                            </div>
                        </div>
                        </div>
                        <div class="card ">
                        <div class="card-header" role="tab" id="venxinghead">
                                <div className={classes.root}>
                                    <Avatar alt="Remy Sharp" src="" className={classes.large} />
                                </div>
                            <div className="">
                                <h3 class="mb-0">
                                
                                <a
                                    data-toggle="collapse"
                                    data-target="#venxing"
                                >
                                    Venxing <small>Front End</small>
                                </a>
                                </h3>
                            </div>
                            
                        </div>
                        <div class="collapse " id="venxing" data-parent="#accordion">
                            <div class="card-body">
                            <h5 class="d-none d-sm-block">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sapien massa, rhoncus ac scelerisque nec, rutrum ut odio. Vestibulum commodo elit sed massa placerat, eget malesuada odio malesuada. Pellentesque vel est sagittis, elementum felis in, ornare mi. Ut facilisis dictum gravida. Duis dolor enim, gravida eu sapien et, blandit commodo diam. Donec auctor efficitur consequat. Suspendisse vel bibendum ligula, nec rhoncus nulla. Aliquam non urna eget nulla consectetur auctor sit amet et tellus. Mauris tempor, nibh eget sagittis pharetra, tortor dolor vestibulum dui, et placerat odio lorem vel arcu. Phasellus nec sodales metus. Morbi justo lorem, hendrerit sit amet egestas vitae, gravida id lectus. Nam tempor fringilla ligula, in vulputate dolor blandit quis.
                                <em>You click only if you survive my lick.</em>
                            </h5>
                            </div>
                        </div>
                        </div>
                        <div class="card">
                            
                        <div class="card-header" role="tab" id="albertohead">

                            <div className="">
                                <div className={classes.root}>
                                    <Avatar alt="Remy Sharp" src="" className={classes.large} />
                                </div>
                            </div>
                            <div className="">
                                <h3 class="mb-0">
                                
                                <a
                                    data-toggle="collapse"
                                    data-target="#vichea"
                                >
                                Vichea <small>Back End</small>
                                </a>
                                </h3>
                            </div>
                        </div>

                        <div class="collapse " id="vichea" data-parent="#accordion">
                            <div class="card-body">
                            <h5 class="d-none d-sm-block">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sapien massa, rhoncus ac scelerisque nec, rutrum ut odio. Vestibulum commodo elit sed massa placerat, eget malesuada odio malesuada. Pellentesque vel est sagittis, elementum felis in, ornare mi. Ut facilisis dictum gravida. Duis dolor enim, gravida eu sapien et, blandit commodo diam. Donec auctor efficitur consequat. Suspendisse vel bibendum ligula, nec rhoncus nulla. Aliquam non urna eget nulla consectetur auctor sit amet et tellus. Mauris tempor, nibh eget sagittis pharetra, tortor dolor vestibulum dui, et placerat odio lorem vel arcu. Phasellus nec sodales metus. Morbi justo lorem, hendrerit sit amet egestas vitae, gravida id lectus. Nam tempor fringilla ligula, in vulputate dolor blandit quis.
                                <em>Put together the cuisines from the two craziest cultures,
                                and you get a winning hit! Amma Mia!</em>
                            </h5>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
}
