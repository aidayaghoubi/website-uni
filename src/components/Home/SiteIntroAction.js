import classes from './SiteIntroAction.module.scss';

const SiteIntroAction = () => {


    return (
        <div className={classes['site-intro-action']}>
            <div>
                <span className={classes.saleOff}>15</span><span className={classes.percent}>%</span>
                <span className={classes.lastpart}>In All Products</span>
            </div>
            <div className={classes.btnholder}>
                <button className={classes.goColection}>Check Collection <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="31.687" height="31.687" viewBox="0 0 31.687 31.687">
                        <g id="Layer_2" data-name="Layer 2" transform="translate(15.844) rotate(45)">
                            <g id="arrow-upward">
                                <rect id="Rectangle_4" data-name="Rectangle 4" width="22.406" height="22.406" transform="translate(22.406 22.406) rotate(180)" fill="#fff" opacity="0" />
                                <path id="Path_11" data-name="Path 11" d="M.216,6.2a.934.934,0,0,0,1.316.121L5.6,2.929V14A.934.934,0,1,0,7.47,14V2.929l4.07,3.389A.935.935,0,0,0,12.736,4.88L7.134.212,6.994.128,6.873.063a.934.934,0,0,0-.672,0L6.079.128l-.14.084L.338,4.88A.934.934,0,0,0,.216,6.2Z" transform="translate(4.666 3.737)" fill="#fff" />
                            </g>
                        </g>
                    </svg>


                </span>
                </button>
                <button className={classes.basket}>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="21.869" height="23.491" viewBox="0 0 21.869 23.491">
                            <g id="shop" transform="translate(0.401 0.4)">
                                <path id="Path_15" data-name="Path 15" d="M30.6,56.064H13.551a2.008,2.008,0,0,1-2-2.14l.793-12.048a2.013,2.013,0,0,1,2-1.876H29.809a2.013,2.013,0,0,1,2,1.876l.793,12.048a2.008,2.008,0,0,1-2,2.14ZM14.344,40.8a1.208,1.208,0,0,0-1.2,1.126l-.793,12.048a1.2,1.2,0,0,0,1.2,1.284H30.6a1.2,1.2,0,0,0,1.2-1.284l-.793-12.048a1.208,1.208,0,0,0-1.2-1.126Z" transform="translate(-11.543 -33.373)" fill="#979797" stroke="#979797" stroke-width="0.8" />
                                <path id="Path_16" data-name="Path 16" d="M42.655,16.839a.4.4,0,0,1-.4-.4v-.9c0-4.263-2.792-7.731-6.225-7.731S29.8,11.271,29.8,15.534v.9a.4.4,0,0,1-.8,0v-.9C29,10.828,32.153,7,36.028,7s7.028,3.828,7.028,8.534v.9A.4.4,0,0,1,42.655,16.839Z" transform="translate(-25.495 -7)" fill="#979797" stroke="#979797" stroke-width="0.8" />
                            </g>
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    )
}

export default SiteIntroAction;