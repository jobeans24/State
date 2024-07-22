import React from 'react'
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
export default function TimerForm({onChangeHandler}) {
  return (
    <Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Timer Length</Form.Label>
      <Form.Control onChange={onChangeHandler } type="number" placeholder="10"></Form.Control>
    </Form.Group>
    </Form>
  )
}
