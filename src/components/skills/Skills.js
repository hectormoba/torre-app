import React, { useEffect, useState, Fragment } from "react";


export default function Skills(props){
  const { user, name } = props;
  const [skills, setSkills] = useState({});

  useEffect(() => {
    let obj = {
      master: [],
      expert: [],
      proficient: [],
      novice: [],
      "no-experience-interested": []
    }
    if(user.strengths !== undefined) {
      let map = user.strengths;
      map.forEach(element => {
        if(obj.hasOwnProperty(element.proficiency)) {
          obj[element.proficiency].push(element.name)
        }
      });
      setSkills(obj)
    }
  },[user.strengths, name])

  return (
    <section className="size-container skills">
      <h3 className="m-heading-size">Skills and interest</h3>
      <div>
        {
          Object.keys(skills).length === 0 ? "Loading" :
          (
          <Fragment>
            <div>
              <h4 className="text-heading-size">Master</h4>
              <ul>
                {
                  skills.master.length === 0 ? <li>No skills yet</li>
                  : skills.master.map(element => {
                    return <li className="skills__pill" key={element}>{element}</li>
                  })
                }
              </ul>
            </div>
            <div>
              <h4 className="text-heading-size">Expert</h4>
              <ul>
                {
                  skills.expert.length === 0 ? <li>No skills yet</li>
                  : skills.expert.map(element => {
                    return <li className="skills__pill" key={element}>{element}</li>
                  })
                }
              </ul>
            </div>
            <div>
              <h4 className="text-heading-size">Proficient</h4>
              <ul>
                {
                  skills.proficient.length === 0 ? <li>No skills yet</li>
                  : skills.proficient.map(element => {
                    return <li className="skills__pill" key={element}>{element}</li>
                  })
                }
              </ul>
            </div>
            <div>
              <h4 className="text-heading-size">Novice</h4>
              <ul>
                {
                  skills.novice.length === 0 ? <li>No skills yet</li>
                  : skills.novice.map(element => {
                    return <li className="skills__pill" key={element}>{element}</li>
                  })
                }
              </ul>
            </div>
            <div>
              <h4 className="text-heading-size">No experience, but interested</h4>
              <ul>
                {
                  skills["no-experience-interested"].length === 0 ? <li>No skills yet</li>
                  : skills["no-experience-interested"].map(element => {
                    return <li className="skills__pill" key={element}>{element}</li>
                  })
                }
              </ul>
            </div>
          </Fragment>
          )
        }
      </div>
    </section>
  )
}