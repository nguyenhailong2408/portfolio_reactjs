import IconASPNET from '../../icon/iconASPNET'
import { IconBackend } from '../../icon/iconBackend'
import IconCsharp from '../../icon/iconCsharp'
import IconMongo from '../../icon/iconMongo'
import { IconMSSQL } from '../../icon/iconMSSQL'
import IconNET from '../../icon/iconNET'
import IconNetcore from '../../icon/iconNetcore'
import IconPostgreSQL from '../../icon/iconPostgreSQL'
import { IconRestAPI } from '../../icon/iconRestAPI'

export default function Backend() {
  return (
    <div className='group card-base'>
      <div className='card-hover animate-shimmer'></div>
      <div className='p-6 relative z-10'>
        <div className='flex items-center gap-4 mb-6'>
          <div className='text-green-400 card-title-icon'>
            <IconBackend />
          </div>
          <h3 className='card-title'>Backend Development</h3>
        </div>
        <div className='flex flex-wrap gap-2'>
          <div className='card-list-item'>
            <span className='transform group-hover/badge:scale-110 transition-transform duration-300'>
              <IconCsharp />
            </span>
            <span className='font-medium'>C#</span>
          </div>
          <div className='card-list-item'>
            <span className='transform group-hover/badge:scale-110 transition-transform duration-300'>
              <IconNET />
            </span>
            <span className='font-medium'>.NET</span>
          </div>
          <div className='card-list-item'>
            <span className='transform group-hover/badge:scale-110 transition-transform duration-300'>
              <IconASPNET />
            </span>
            <span className='font-medium'>ASP.NET</span>
          </div>
          <div className='card-list-item'>
            <span className='transform group-hover/badge:scale-110 transition-transform duration-300'>
              <IconNetcore />
            </span>
            <span className='font-medium'>.NET Core</span>
          </div>
          <div className='card-list-item'>
            <span className='transform group-hover/badge:scale-110 transition-transform duration-300'>
              <IconRestAPI />
            </span>
            <span className='font-medium'>API (REST/SOAP)</span>
          </div>
          <div className='card-list-item'>
            <span className='transform group-hover/badge:scale-110 transition-transform duration-300'>
              <IconMSSQL />
            </span>
            <span className='font-medium'>MSSQL</span>
          </div>
          <div className='card-list-item'>
            <span className='transform group-hover/badge:scale-110 transition-transform duration-300'>
              <IconPostgreSQL />
            </span>
            <span className='font-medium'>PostgreSQL</span>
          </div>
          <div className='card-list-item'>
            <span className='transform group-hover/badge:scale-110 transition-transform duration-300'>
              <IconMongo />
            </span>
            <span className='font-medium'>MongoDB</span>
          </div>
          {/* <div className='card-list-item'>
                    <span className='transform group-hover/badge:scale-110 transition-transform duration-300'>
                      <IconGraph_QL />
                    </span>
                    <span className='font-medium'>GraphQL</span>
                  </div> */}
        </div>
      </div>
    </div>
  )
}
