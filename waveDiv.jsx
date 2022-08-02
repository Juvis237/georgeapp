import React from "react";


export default function Wavy(){

    return (
        <React.Fragment>
        <div className="container-fluid">
        <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 600" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150">
            <defs>
                <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#002bdc88"></stop>
                    <stop offset="95%" stop-color="#32ded488"></stop>
                </linearGradient>
            </defs>
            <path d="M 0,600 C 0,600 0,200 0,200 C 69.11961722488039,190.51674641148327 138.23923444976077,181.0334928229665 239,170 C 339.7607655502392,158.9665071770335 472.1626794258374,146.38277511961726 575,143 C 677.8373205741626,139.61722488038274 751.11004784689,145.43540669856458 855,166 C 958.88995215311,186.56459330143542 1093.397129186603,221.87559808612443 1196,230 C 1298.602870813397,238.12440191387557 1369.3014354066986,219.06220095693777 1440,200 C 1440,200 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150 path-0"></path>
            <defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="5%" stop-color="#002bdcff"></stop>
                <stop offset="95%" stop-color="#32ded4ff"></stop>
                </linearGradient></defs>
                <path d="M 0,600 C 0,600 0,400 0,400 C 106.17224880382778,373.3875598086124 212.34449760765557,346.77511961722485 307,332 C 401.65550239234443,317.22488038277515 484.7942583732056,314.2870813397129 581,347 C 677.2057416267944,379.7129186602871 786.4784688995218,448.07655502392345 886,458 C 985.5215311004782,467.92344497607655 1075.291866028708,419.4066985645933 1166,400 C 1256.708133971292,380.5933014354067 1348.354066985646,390.29665071770336 1440,400 C 1440,400 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150 path-1"></path>
                </svg>
      </div>
      </React.Fragment>
    );
}

