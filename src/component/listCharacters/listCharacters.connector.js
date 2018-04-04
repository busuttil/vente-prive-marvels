import { connect } from 'react-redux';
import { loadCharacters } from '../../redux/characters/characters.actions';
import ListCharacters from './listCharacters.component';

const mapStateToProps = state => ({
  characters: state.characters.list
});

const mapDispatchToProps = dispatch => ({
  loadCharactersActions: () => dispatch(loadCharacters())
});

export default connect(mapStateToProps, mapDispatchToProps)(ListCharacters);
