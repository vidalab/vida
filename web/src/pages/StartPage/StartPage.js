import VizCell from '../../components/VizCell'
import { useStyles } from '../../components/Constants'

const StartPage = () => {
  const name = 'viz'
  const classes = useStyles()

  return (
    <>
      <div className={classes.root}>
        {<VizCell name={name} />}
      </div>
    </>
  )
}

export default StartPage
