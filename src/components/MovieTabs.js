import React from "react";

class MovieTabs extends React.Component {
    //защита от апдейта компонента, если сорт_бай не изменен
    // например при добавлении фильмов в просмотренное
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if(nextProps.sort_by !== this.props.sort_by) {
            return true;
        } else {
            return false;
        }
    }

    render() {

        const handleClick = value => () =>{
            this.props.updateSortBy(value);

        };

        const getClassByValue = (value) => {
            return(
                `nav-link ${this.props.sort_by === value ? "active": ""}`
            )
        };

        console.log("movie tabs render");

        return (
            <ul className="tabs nav nav-pills">
                <li className="nav-item">
                    <div className={getClassByValue("popularity.desc")}
                         onClick={handleClick("popularity.desc")}>
                        Popularity desc
                    </div>
                </li>
                <li className="nav-item">
                    <div className={getClassByValue("revenue.desc")}
                         onClick={handleClick("revenue.desc")}>
                        Revenue decs
                    </div>
                </li>
                <li className="nav-item">
                    <div className={getClassByValue("vote_average.desc")}
                         onClick={handleClick("vote_average.desc")}>
                        vote average desc
                    </div>
                </li>
            </ul>
        );
    }

}
// const MovieTabs = (props) => {
//     const {sort_by, updateSortBy} = props;
//     //     const handleClick = value => {
//     //         return() => {
//     //             updateSortBy(value);
//
//     //         };
//     // };
//
//
//     const handleClick = value => () =>{
//             updateSortBy(value);
//
//         };
//
//     const getClassByValue = (value) => {
//         return(
//             `nav-link ${sort_by === value ? "active": ""}`
//         )
//     };
//
//     shouldComponentUpdate(nextProps, nextState, nextContext) {
//         if(nextProps.sort_by !== this.props.sort_by) {
//             return false;
//         }
//     }
//
//
//     return (
//
//         <ul className="tabs nav nav-pills">
//             <li className="nav-item">
//                 <div className={getClassByValue("popularity.desc")}
//                 onClick={handleClick("popularity.desc")}>
//                     Popularity desc
//                 </div>
//             </li>
//             <li className="nav-item">
//                 <div className={getClassByValue("revenue.desc")}
//                      onClick={handleClick("revenue.desc")}>
//                     Revenue decs
//                 </div>
//             </li>
//             <li className="nav-item">
//                 <div className={getClassByValue("vote_average.desc")}
//                      onClick={handleClick("vote_average.desc")}>
//                     vote average desc
//                 </div>
//             </li>
//         </ul>
//     )
// }

export default MovieTabs;