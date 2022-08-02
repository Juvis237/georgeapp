import React from "react";
import Description , { DescriptiveText} from "./serviceDescription";

import Servicedata from "./dataFile";

Servicedata.forEach((obj) => {
    console.log(obj.id);
});


export default function ServicePage(props){
   
    return(
        <section>
            <Description />
            <DescriptiveText />
        </section>

    );
}
