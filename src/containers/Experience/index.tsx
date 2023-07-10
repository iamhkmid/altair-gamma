import { experiences } from '../../utils/constants/experience'
import { ExperienceStyled, ExperienceItem } from './ExprerienceStyled'
import { ReactComponent as CheckIcon } from "../../assets/icons/checkmark-outline.svg"
import { motion } from "framer-motion"

const Experience = () => {
  return (
    <ExperienceStyled
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="content">
        <div className="experiences">
          {experiences.map((exp, idx) => (
            <ExperienceItem
              key={exp.company}
              $idx={idx}
              $length={experiences.length}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: idx * 0.5, bounceDamping: 0 }}
            >
              <div className="stage">
                <div className="circle">{idx !== 0 ? <CheckIcon /> : <div className="current" />}</div>
                <motion.div className="line"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              </div>
              <div className="detail">
                <p>{exp.role}</p>
                <p>{exp.company}</p>
                <p>{exp.description}</p>
              </div>
            </ExperienceItem>
          ))}
        </div>
      </div>
    </ExperienceStyled>
  )
}

export default Experience
