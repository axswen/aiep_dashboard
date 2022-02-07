import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import { DocsCallout, DocsExample } from 'src/components'

const UserUpdate = () => {
  return (
    <CRow>
      
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Buscador de usuarios</strong>
          </CCardHeader>
          <CCardBody>
              <CInputGroup className="mb-3">
                <CFormInput
                  placeholder="Buscar usuario"
                  aria-label="Buscar usuario"
                  aria-describedby="button-addon2"
                />
                <CButton type="button" color="secondary" variant="outline" id="button-addon2">
                  Buscar
                </CButton>
              </CInputGroup>

              <CInputGroup>
                <CInputGroupText>Respuesta</CInputGroupText>
                <CFormTextarea aria-label="Respuesta"></CFormTextarea>
              </CInputGroup>
              
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default UserUpdate
