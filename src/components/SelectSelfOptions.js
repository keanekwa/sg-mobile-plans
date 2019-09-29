import React from 'react';
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import ResultList from './ResultList'

class SelectSelfOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minData: 0,
      minTalktime: 0,
      minSMS: 0,
      price: 0,
      showResultList: false,
    }
    //change this to redux so that I can use makeStyles
  }

  handleClick = () => {
    this.setState({ ['showResultList']: true });
    return <ResultList optionsSelected={this.state}/>;
  }

  render () {
    return (
      <Container maxWidth='md'>
        <Box>
          I need at least:
          <Input placeholder='0 GB of data' onChange={(event) => this.setState({ ['minData']: event.target.value })}/>
          <Input placeholder='0 min of talktime' onChange={(event) => this.setState({ ['minTalktime']: event.target.value })}/>
          <Input placeholder='0 SMS' onChange={(event) => this.setState({ ['minSMS']: event.target.value })}/>
        </Box>
        <Box>
          My monthly budget for this will be $<Input placeholder='0' onChange={(event) => this.setState({ ['price']: event.target.value })}/>
        </Box>
        <Box>
          {!this.state.showResultList && <Button onClick={() => this.handleClick()} variant='outlined' size='large' color='primary'>Next</Button>} 
          {this.state.showResultList && <ResultList optionsSelected={this.state}/>}
        </Box>
      </Container>
    );
  }
}

export default SelectSelfOptions;

