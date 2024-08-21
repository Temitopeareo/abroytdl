import React from "react";

export default function FooterThree() {
  return (
    <section className="bg-grey/95 border-t-2 border-red-200 relative overflow-hidden  py-8">
      <div className="container relative z-10 mx-auto px-4">
        <div className="-m-8 flex flex-wrap items-center justify-between">
          <div className="w-auto p-8">
            <a href="#">
              <div className="inline-flex items-center">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5zm18 0H4v11h16V5zm2 15a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h18a1 1 0 0 1 1 1z" fill="#0D0D0D"/>
                </svg>
                <span className="ml-4 text-lg font-bold">ABRO YT LOADER</span>
              </div>
            </a>
          </div>

          <div className="w-auto p-8">
            <div className="-m-1.5 flex flex-wrap">
              <div className="w-auto p-1.5">
                <a href="https://www.instagram.com/abro_tech/" target="_blank">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-red-400 hover:border-red-500">
                  <svg
                      width="16"
                      height="15"
                      viewBox="0 0 16 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.00094 0.360001C6.09046 0.360001 5.85022 0.368801 5.09958 0.402241C4.34894 0.437441 3.83766 0.555361 3.38974 0.729601C2.9199 0.906321 2.49433 1.18353 2.14278 1.54184C1.78468 1.89357 1.50751 2.31909 1.33054 2.7888C1.1563 3.23584 1.0375 3.748 1.00318 4.496C0.969738 5.2484 0.960937 5.48776 0.960937 7.40088C0.960937 9.31224 0.969738 9.5516 1.00318 10.3022C1.03838 11.052 1.1563 11.5633 1.33054 12.0112C1.51094 12.4741 1.75118 12.8666 2.14278 13.2582C2.5335 13.6498 2.92598 13.8909 3.38886 14.0704C3.83766 14.2446 4.34806 14.3634 5.09782 14.3978C5.84934 14.4312 6.0887 14.44 8.00094 14.44C9.91318 14.44 10.1517 14.4312 10.9032 14.3978C11.6521 14.3626 12.1651 14.2446 12.613 14.0704C13.0826 13.8936 13.5078 13.6164 13.8591 13.2582C14.2507 12.8666 14.4909 12.4741 14.6713 12.0112C14.8447 11.5633 14.9635 11.052 14.9987 10.3022C15.0321 9.5516 15.0409 9.31224 15.0409 7.4C15.0409 5.48776 15.0321 5.2484 14.9987 4.49688C14.9635 3.748 14.8447 3.23584 14.6713 2.7888C14.4944 2.31908 14.2172 1.89356 13.8591 1.54184C13.5077 1.1834 13.0821 0.906169 12.6121 0.729601C12.1633 0.555361 11.6512 0.436561 10.9023 0.402241C10.1508 0.368801 9.9123 0.360001 7.99918 0.360001H8.00182H8.00094ZM7.36998 1.62896H8.00182C9.8815 1.62896 10.1041 1.63512 10.846 1.66944C11.5324 1.70024 11.9055 1.81552 12.1537 1.91144C12.4819 2.03904 12.7169 2.19216 12.9633 2.43856C13.2097 2.68496 13.3619 2.91904 13.4895 3.24816C13.5863 3.49544 13.7007 3.86856 13.7315 4.55496C13.7658 5.2968 13.7729 5.51944 13.7729 7.39824C13.7729 9.27704 13.7658 9.50056 13.7315 10.2424C13.7007 10.9288 13.5854 11.301 13.4895 11.5492C13.3766 11.8549 13.1965 12.1313 12.9624 12.3579C12.716 12.6043 12.4819 12.7566 12.1528 12.8842C11.9064 12.981 11.5333 13.0954 10.846 13.127C10.1041 13.1605 9.8815 13.1684 8.00182 13.1684C6.12214 13.1684 5.89862 13.1605 5.15678 13.127C4.47038 13.0954 4.09814 12.981 3.84998 12.8842C3.54418 12.7715 3.26753 12.5916 3.04038 12.3579C2.80608 12.1309 2.62565 11.8543 2.51238 11.5483C2.41646 11.301 2.30118 10.9279 2.27038 10.2415C2.23694 9.49968 2.2299 9.27704 2.2299 7.39648C2.2299 5.5168 2.23694 5.29504 2.27038 4.5532C2.30206 3.8668 2.41646 3.49368 2.51326 3.24552C2.64086 2.91728 2.79398 2.68232 3.04038 2.43592C3.28678 2.18952 3.52086 2.03728 3.84998 1.90968C4.09814 1.81288 4.47038 1.69848 5.15678 1.6668C5.80622 1.63688 6.0579 1.62808 7.36998 1.6272V1.62896ZM11.7594 2.7976C11.6485 2.7976 11.5386 2.81945 11.4361 2.86191C11.3336 2.90436 11.2405 2.96659 11.1621 3.04504C11.0836 3.12348 11.0214 3.21661 10.9789 3.31911C10.9365 3.42161 10.9146 3.53146 10.9146 3.6424C10.9146 3.75334 10.9365 3.8632 10.9789 3.96569C11.0214 4.06819 11.0836 4.16132 11.1621 4.23976C11.2405 4.31821 11.3336 4.38044 11.4361 4.42289C11.5386 4.46535 11.6485 4.4872 11.7594 4.4872C11.9835 4.4872 12.1984 4.3982 12.3568 4.23976C12.5152 4.08133 12.6042 3.86646 12.6042 3.6424C12.6042 3.41835 12.5152 3.20347 12.3568 3.04504C12.1984 2.88661 11.9835 2.7976 11.7594 2.7976ZM8.00182 3.78496C7.52228 3.77748 7.04604 3.86547 6.60084 4.0438C6.15563 4.22214 5.75035 4.48726 5.40859 4.82373C5.06683 5.1602 4.79542 5.5613 4.61016 6.00367C4.4249 6.44604 4.32949 6.92084 4.32949 7.40044C4.32949 7.88004 4.4249 8.35484 4.61016 8.79721C4.79542 9.23958 5.06683 9.64068 5.40859 9.97715C5.75035 10.3136 6.15563 10.5787 6.60084 10.7571C7.04604 10.9354 7.52228 11.0234 8.00182 11.0159C8.95093 11.0011 9.85616 10.6137 10.5221 9.93726C11.1881 9.26084 11.5613 8.34967 11.5613 7.40044C11.5613 6.45121 11.1881 5.54004 10.5221 4.86362C9.85616 4.1872 8.95093 3.79977 8.00182 3.78496ZM8.00182 5.05304C8.62427 5.05304 9.22123 5.30031 9.66137 5.74045C10.1015 6.18059 10.3488 6.77755 10.3488 7.4C10.3488 8.02245 10.1015 8.61941 9.66137 9.05955C9.22123 9.49969 8.62427 9.74696 8.00182 9.74696C7.37937 9.74696 6.78241 9.49969 6.34227 9.05955C5.90213 8.61941 5.65486 8.02245 5.65486 7.4C5.65486 6.77755 5.90213 6.18059 6.34227 5.74045C6.78241 5.30031 7.37937 5.05304 8.00182 5.05304Z"
                        fill="#27272A"
                      ></path>
                    </svg>
                    
                  </div>
                </a>
              </div>
              <div className="w-auto p-1.5">
  <a href="https://wa.me/2348100151048" target="_blank" rel="noopener noreferrer">
    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-red-400 hover:border-red-500">
<svg width="16px" 
  height="15px" 
  viewBox="0 0 16 15" fill="none" 
  xmlns="http://www.w3.org/2000/svg"
  >
  <path d="M1.8998 11.7004L2.34701 11.924L2.48533 11.6474L2.29956 11.4001L1.8998 11.7004ZM3.29959 13.1002L3.59991 12.7004L3.35262 12.5147L3.07598 12.653L3.29959 13.1002ZM0.5 14.5L0.0527864 14.2764C-0.0434608 14.4689 -0.00573355 14.7014 0.146447 14.8536C0.298627 15.0057 0.531113 15.0435 0.723607 14.9472L0.5 14.5ZM4.5 4.5L4.22265 4.08397C4.08355 4.17671 4 4.33282 4 4.5H4.5ZM10.5 10.5V11C10.6672 11 10.8233 10.9164 10.916 10.7774L10.5 10.5ZM6.25426 5.02554L6.74745 4.94334L6.25426 5.02554ZM6.3937 5.86221L5.90051 5.94441L6.3937 5.86221ZM5.96201 6.85866L6.23936 7.27469H6.23936L5.96201 6.85866ZM10.6421 10.2868L11.0581 10.5642L10.6421 10.2868ZM9.97446 8.74574L10.0567 8.25255L9.97446 8.74574ZM9.13779 8.6063L9.05559 9.09949V9.0995L9.13779 8.6063ZM8.14134 9.03799L7.72531 8.76064L8.14134 9.03799ZM0 7.5C0 9.18803 0.558266 10.7471 1.50003 12.0007L2.29956 11.4001C1.48342 10.3137 1 8.96403 1 7.5H0ZM7.5 0C3.35786 0 0 3.35786 0 7.5H1C1 3.91015 3.91015 1 7.5 1V0ZM15 7.5C15 3.35786 11.6421 0 7.5 0V1C11.0899 1 14 3.91015 14 7.5H15ZM7.5 15C11.6421 15 15 11.6421 15 7.5H14C14 11.0899 11.0899 14 7.5 14V15ZM2.99927 13.5C4.25289 14.4417 5.81197 15 7.5 15V14C6.03597 14 4.68629 13.5166 3.59991 12.7004L2.99927 13.5ZM0.723607 14.9472L3.5232 13.5474L3.07598 12.653L0.276393 14.0528L0.723607 14.9472ZM1.45258 11.4768L0.0527864 14.2764L0.947214 14.7236L2.34701 11.924L1.45258 11.4768ZM4 4.5V5.5H5V4.5H4ZM9.5 11H10.5V10H9.5V11ZM4 5.5C4 8.53757 6.46243 11 9.5 11V10C7.01472 10 5 7.98528 5 5.5H4ZM4.77735 4.91603L4.99051 4.77392L4.43581 3.94187L4.22265 4.08397L4.77735 4.91603ZM5.76106 5.10774L5.90051 5.94441L6.8869 5.78001L6.74745 4.94334L5.76106 5.10774ZM5.68466 6.44264L4.72265 7.08397L5.27735 7.91603L6.23936 7.27469L5.68466 6.44264ZM5.90051 5.94441C5.93285 6.13849 5.84837 6.3335 5.68466 6.44264L6.23936 7.27469C6.73049 6.94727 6.98394 6.36225 6.8869 5.78001L5.90051 5.94441ZM4.99051 4.77392C5.29241 4.57266 5.70141 4.74985 5.76106 5.10774L6.74745 4.94334C6.56851 3.86967 5.34149 3.33808 4.43581 3.94187L4.99051 4.77392ZM10.916 10.7774L11.0581 10.5642L10.2261 10.0095L10.084 10.2226L10.916 10.7774ZM10.0567 8.25255L9.21999 8.1131L9.05559 9.0995L9.89226 9.23894L10.0567 8.25255ZM7.72531 8.76064L7.08397 9.72265L7.91603 10.2774L8.55736 9.31534L7.72531 8.76064ZM9.21999 8.1131C8.63775 8.01606 8.05273 8.26951 7.72531 8.76064L8.55736 9.31534C8.6665 9.15163 8.86151 9.06715 9.05559 9.09949L9.21999 8.1131ZM11.0581 10.5642C11.6619 9.65851 11.1303 8.43149 10.0567 8.25255L9.89226 9.23894C10.2502 9.29859 10.4273 9.70759 10.2261 10.0095L11.0581 10.5642Z" 
    fill="#000000"
    />
</svg>
      </div>
    </a>
  </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
