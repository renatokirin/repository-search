import React from "react";
import "./style.css";


const Results = (props) => {
    const { repos } = props

    function checkNull(variable) {
        if (variable !== null) {
            return variable.name
        } else {
            return ""
        }
    }


    function listTopics(topics) {
        if (topics !== null) {
            return topics.map((item) =>
                <a href={"https://github.com/topics/" + item} class="repository__topic">{item}</a>
            )
        } else {
            return ""
        }
    }

    const listRepos = repos.length !== 0 ? repos.items.map((item) =>  // html_url
        <ul class="repository">
            <li class="repository__name"><a href={item.html_url} >{item.full_name}</a></li>
            <li class="repository__description">{item.description}</li>
            <li class="repository__topics">
                {listTopics(item.topics)}
            </li>

            <li class="repository__details">
                <div class="stargazers">
                    <svg aria-label="star" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
                        <path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
                    </svg>
                    {item.stargazers_count}
                </div>
                <div>{item.language}</div>
                <div>{checkNull(item.license)}</div>
            </li>
        </ul>
    ) : (<ul class="repository">No repos found</ul>)

    return (
        <>
            {listRepos}
        </>

    )
}

export default Results