import React from 'react'
//import components
import { Box, IconButton, Fade, Table, TableBody, TableCell, TableHead, TableRow, AppBar, Toolbar } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
//import styles
import { withStyles } from '@material-ui/core/styles'
//import redux
import { connect } from 'react-redux'
import { setIsShowMobileResultDetails } from '../../../redux/results/results-actions'
import { blueGrey } from '@material-ui/core/colors'

const styles = theme => ({
  fullHeight: {
    height: '100%',
    flex: 1,
    display: 'flex',
    flexFlow: 'column'
  },
  contentBox: {
    maxWidth: '100%',
    overflow: 'auto'
  },
  tableHeadCell: {
    backgroundColor: blueGrey[700],
    fontWeight: '700',
    color: theme.palette.common.white
  },
  AppBar: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
})

const addPlanTypeToProsCons = (planType, propsProsCons) => {
  let newProsOrCons = null
  if (propsProsCons !== undefined) {
    newProsOrCons = [planType].concat(propsProsCons)
  } else {
    newProsOrCons = [planType]
  }
  return newProsOrCons
}

const ResultDetails = props => {
  const { classes } = props

  let pros = null
  let cons = null
  if (props.resultSelected.planType === 'No contract') {
    pros = addPlanTypeToProsCons(props.resultSelected.planType, props.resultSelected.pros)
    cons = props.resultSelected.cons !== undefined ? props.resultSelected.cons : null
  } else if (props.resultSelected.planType === '24 month contract' || props.resultSelected.planType === '12 month contract') {
    cons = addPlanTypeToProsCons(props.resultSelected.planType, props.resultSelected.cons)
    pros = props.resultSelected.pros !== undefined ? props.resultSelected.pros : null
  }
  let mappedPros = pros !== null ? pros.map(prosCons => <li key={prosCons}>{prosCons}</li>) : null
  let mappedCons = cons !== null ? cons.map(prosCons => <li key={prosCons}>{prosCons}</li>) : null
  const mappedNotes = props.resultSelected.notes !== undefined ? props.resultSelected.notes.map(note => <li key={note}>{note}</li>) : null
  const basePlan = props.resultSelected.basePlan !== undefined ? props.resultSelected.basePlan : props.resultSelected
  const addons = props.resultSelected.addons !== undefined ? props.resultSelected.addons : null
  const addonTableRows =
    addons !== null &&
    addons.map(addon => (
      <TableRow>
        <TableCell>
          {addon.addonName} Addon (x{addon.addonMultiple})
        </TableCell>
        <TableCell>
          {addon.multiplier === true && 'x'}
          {addon.data * addon.addonMultiple}
          {addon.multiplier !== true && 'GB'}
        </TableCell>
        <TableCell>{addon.talktime * addon.addonMultiple}min</TableCell>
        <TableCell>{addon.sms * addon.addonMultiple}</TableCell>
        <TableCell>${addon.price.toFixed(2)}</TableCell>
      </TableRow>
    ))

  return (
    <Box className={classes.fullHeight}>
      <AppBar className={classes.AppBar} position="sticky">
        <Toolbar>
          <IconButton color="inherit" onClick={() => props.setIsShowMobileResultDetails(false)}>
            <ArrowBackIcon />
          </IconButton>
          <Box>
            {props.resultSelected.telco} {props.resultSelected.planName} - ${props.resultSelected.price.toFixed(2)}
          </Box>
        </Toolbar>
      </AppBar>
      <Fade className={classes.fullHeight} in={true} timeout={500} mountOnEnter unmountOnExit>
        <Box className={classes.fullHeight}>
          <Box className={`${classes.contentBox} ${classes.fullHeight}`}>
            <Table className={classes.Table}>
              <TableHead>
                <TableRow>
                  <TableCell className={classes.tableHeadCell}>Breakdown:</TableCell>
                  <TableCell className={classes.tableHeadCell}>Data</TableCell>
                  <TableCell className={classes.tableHeadCell}>Talktime</TableCell>
                  <TableCell className={classes.tableHeadCell}>SMS</TableCell>
                  <TableCell className={classes.tableHeadCell}>Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Base Plan</TableCell>
                  <TableCell>{basePlan.data} GB</TableCell>
                  <TableCell>{basePlan.talktime} min</TableCell>
                  <TableCell>{basePlan.sms}</TableCell>
                  <TableCell>${basePlan.price.toFixed(2)}</TableCell>
                </TableRow>
                {addonTableRows !== undefined && addonTableRows}
                <TableRow>
                  <TableCell>Total</TableCell>
                  <TableCell>{props.resultSelected.data} GB</TableCell>
                  <TableCell>{props.resultSelected.talktime} min</TableCell>
                  <TableCell>{props.resultSelected.sms}</TableCell>
                  <TableCell>${props.resultSelected.price.toFixed(2)}</TableCell>
                </TableRow>
              </TableBody>
              {mappedPros !== null && (
                <TableHead>
                  <TableRow>
                    <TableCell colSpan={5} className={classes.tableHeadCell}>
                      Pros:
                    </TableCell>
                  </TableRow>
                </TableHead>
              )}
              {mappedPros !== null && (
                <TableBody>
                  <TableRow>
                    <TableCell colSpan={5}>
                      <ul>{mappedPros}</ul>
                    </TableCell>
                  </TableRow>
                </TableBody>
              )}
              {mappedCons !== null && (
                <TableHead>
                  <TableRow>
                    <TableCell colSpan={5} className={classes.tableHeadCell}>
                      Cons:
                    </TableCell>
                  </TableRow>
                </TableHead>
              )}
              {mappedCons !== null && (
                <TableBody>
                  <TableRow>
                    <TableCell colSpan={5}>
                      <ul>{mappedCons}</ul>
                    </TableCell>
                  </TableRow>
                </TableBody>
              )}
              {mappedNotes !== null && (
                <TableHead>
                  <TableRow>
                    <TableCell colSpan={5} className={classes.tableHeadCell}>
                      Things to Note:
                    </TableCell>
                  </TableRow>
                </TableHead>
              )}
              {mappedNotes !== null && (
                <TableBody>
                  <TableRow>
                    <TableCell colSpan={5}>
                      <ul>{mappedNotes}</ul>
                    </TableCell>
                  </TableRow>
                </TableBody>
              )}
            </Table>
          </Box>
        </Box>
      </Fade>
    </Box>
  )
}

const mapStateToProps = state => ({
  resultSelected: state.results.resultSelected
})

const mapDispatchToProps = dispatch => ({
  setIsShowMobileResultDetails: isShowMobileResultDetails => dispatch(setIsShowMobileResultDetails(isShowMobileResultDetails))
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ResultDetails))
