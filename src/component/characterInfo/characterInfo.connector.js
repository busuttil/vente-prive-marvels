import { connect } from 'react-redux';
import { loadCharacterInfo } from '../../redux/characters/characters.actions';
import CharacterInfo from './characterInfo.component';

const mapStateToProps = (state, props) => ({
  character: state.characters.details[props.match.params.id]
});

const mapDispatchToProps = (dispatch, props) => ({
  loadCharacterInfoActions: () =>
    dispatch(loadCharacterInfo(props.match.params.id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterInfo);
