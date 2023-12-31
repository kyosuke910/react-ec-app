import React from "react"
import { Button, makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  "button": {
    backgroundColor: '#4dd0e1',
    color: '#000',
    fontSize: 16,
    height: 48,
    marginButton: 16,
    width: 256
  }
})

const PrimaryButton = (props) => {
  const classes = useStyles()

  return (
    <Button className={classes.button} variant="contained" onClick={() => props.onClick()}>
      {props.label}
    </Button>
  )
}

export default PrimaryButton