import React from "react";
import { Link } from "react-router-dom";

import { PATH } from "../../../../contants/PATH";
import Icon from "../../../../components/icon";

const ClassItem = ({ name, teacher, iconLock }) => {
    return (
        <div>
            <Link to={PATH.SCHEDULE}>
                <div className="flex items-center justify-between py-2 px-5 bg-white rounded-xl w-full border border-hray-200">
                    <div className="flex items-center">
                        <Icon>{iconLock}</Icon>
                        <p className="text-lg font-bold ml-5 capitalize">
                            {name}
                        </p>
                    </div>

                    <p className="text-sm font-semibold">{teacher}</p>
                </div>
            </Link>
        </div>
    );
};

export default ClassItem;
