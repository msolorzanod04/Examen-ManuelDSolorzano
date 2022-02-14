import React from 'react';
import { Card, Container, Table, Row, Col } from 'react-bootstrap';

class Ejercicio2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
      tableData: [],
    };
  }

  eventoclick(item) {
    this.setState({
      image: item.image,
      brand_name: item.brand_name,
      brand_slug: item.brand_slug,
    });
  }
  async componentDidMount() {
    const response = await fetch('https://api-mobilespecs.azharimm.site/v2/brands');
    const responseData = await response.json();

    this.setState({
      tableData: responseData.data.filter(
        (item) => item.brand_name.length || item.brand_slug.length > 0
      ),
    });
  }

  render() {
    return (
      <div className="main-site">
        <h1>Tabla con datos de telefonos</h1>
        <Container>
          <Row>
            <Col lg={10} md={16}>
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>Nombre teléfono</th>
                    <th>Slug</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.tableData.map((item) => {
                    return (
                      <tr onClick={() => this.eventoclick(item)}>
                        <td>{item.brand_name}</td>
                        <td>{item.brand_slug}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Col lg={2} md={6}>
              {' '}
              <Card variant="outlined" style={{ width: '20rem' }}>
                <Card.Img variant="top" src={this.state.image} style={{border: 'black 10px solid'}} />
                <Card.Body>
                  <Card.Title>
                    {'Nombre marca: ' + this.state.brand_name}
                    <p />
                    {"Slug: " + this.state.brand_slug}
                    <p />
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Ejercicio2;
