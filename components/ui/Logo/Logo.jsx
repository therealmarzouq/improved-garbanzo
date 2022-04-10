const Logo = ({ ...props }) => (
  <svg width="38" height="38" viewBox="0 0 75 75" fill="none" {...props}>
    <circle cx="37.5" cy="37.5" r="37.5" fill="#131E3A" />
    <path
      d="M59.0895 34.2505C59.004 33.4465 58.878 32.509 58.62 31.4845C58.362 30.46 57.9405 29.3515 57.3855 28.1635C56.784 27.0145 56.0655 25.7725 55.0815 24.625C54.699 24.1555 54.2775 23.734 53.847 23.266C54.5265 20.578 53.034 18.235 53.034 18.235C50.4405 18.0715 48.8235 19.048 48.222 19.477C48.1365 19.4305 48.0105 19.3915 47.925 19.3435C47.5035 19.18 47.034 19.0075 46.566 18.835C46.0965 18.7015 45.6285 18.538 45.159 18.4525C44.6895 18.319 44.1825 18.2335 43.6665 18.148C43.581 18.148 43.494 18.109 43.4085 18.109C42.3075 14.5315 39.0645 13 39.0645 13C35.361 15.3835 34.635 18.5785 34.635 18.5785C34.635 18.5785 34.635 18.664 34.596 18.751C34.3845 18.79 34.2135 18.8755 34.002 18.9235C33.744 19.009 33.447 19.096 33.189 19.2205C32.931 19.345 32.634 19.432 32.376 19.5565C31.821 19.8145 31.314 20.0725 30.759 20.3695C30.2505 20.659 29.751 20.971 29.274 21.307C29.1885 21.268 29.1405 21.2215 29.1405 21.2215C24.156 19.3075 19.7265 21.604 19.7265 21.604C19.344 26.932 21.735 30.253 22.203 30.8455C22.0695 31.189 21.984 31.486 21.8595 31.8295C21.477 33.0325 21.2115 34.2745 21.0465 35.533C21.0075 35.7055 21.0075 35.9155 20.961 36.088C16.3665 38.3455 15 43.033 15 43.033C18.8355 47.4625 23.352 47.713 23.352 47.713C23.9145 48.736 24.5715 49.705 25.3125 50.611C25.6095 50.9935 25.9455 51.337 26.289 51.721C24.882 55.7215 26.5005 59.0875 26.5005 59.0875C30.8055 59.26 33.618 57.2125 34.212 56.743L35.4855 57.1255C36.8055 57.469 38.1735 57.6805 39.4935 57.727H41.235C43.2435 60.6175 46.821 61.0075 46.821 61.0075C49.329 58.3195 49.5 55.7185 49.5 55.1245V54.8665C50.016 54.484 50.523 54.1015 51.039 53.6785C52.0545 52.78 52.9065 51.718 53.679 50.608C53.7645 50.5225 53.8035 50.3965 53.8905 50.311C56.742 50.4835 58.7415 48.5215 58.7415 48.5215C58.272 45.5455 56.5695 44.092 56.2335 43.8415L56.148 43.756L56.109 43.7095C56.109 43.546 56.148 43.3735 56.148 43.1545C56.187 42.8185 56.187 42.5215 56.187 42.178V40.9435C56.187 40.858 56.187 40.771 56.148 40.6855L56.0625 40.177C56.0235 39.8335 55.938 39.5365 55.89 39.193C55.593 37.9345 55.1085 36.724 54.444 35.6155C53.772 34.537 52.959 33.568 52.014 32.7175C51.1005 31.9135 50.0685 31.249 48.951 30.7645C47.889 30.265 46.7475 29.9515 45.5835 29.8195C45.0285 29.734 44.4345 29.734 43.881 29.734H43.029C42.732 29.7805 42.435 29.8195 42.177 29.8675C41.028 30.079 39.9585 30.508 39.021 31.0555C38.0835 31.6105 37.2795 32.3365 36.5985 33.142C35.934 33.916 35.4105 34.7905 35.0595 35.743C34.7235 36.634 34.5045 37.618 34.4655 38.509V39.532C34.4655 39.6565 34.4655 39.7435 34.5045 39.8755C34.638 41.188 35.121 42.4375 35.9115 43.492C36.4275 44.1715 36.9735 44.6875 37.614 45.109C38.2545 45.538 38.895 45.835 39.5745 46.0465C40.2615 46.2655 40.8945 46.3435 41.4885 46.3045H42.387C42.4725 46.3045 42.5505 46.2655 42.5985 46.2655C42.684 46.2655 42.723 46.219 42.81 46.219C42.9345 46.18 43.107 46.1335 43.2315 46.0945C43.4895 46.009 43.7475 45.883 44.0055 45.7975C44.256 45.664 44.466 45.5395 44.6385 45.4075C44.685 45.3685 44.772 45.322 44.811 45.283C45.0225 45.1195 45.0615 44.8135 44.8965 44.6035C44.724 44.44 44.475 44.3845 44.256 44.47C44.217 44.5165 44.1705 44.5165 44.0925 44.5555C43.9125 44.65 43.725 44.719 43.5375 44.7745C43.3185 44.8135 43.1085 44.899 42.897 44.938C42.7725 44.938 42.6855 44.9845 42.5535 44.9845H41.835C41.835 44.9845 41.796 44.9845 41.835 44.9845H41.6625C41.616 44.9845 41.538 44.9845 41.49 44.938C41.0205 44.8525 40.5135 44.7265 40.044 44.5165C39.5745 44.2975 39.1065 44.0005 38.724 43.618C38.295 43.2355 37.959 42.814 37.662 42.298C37.365 41.7895 37.1925 41.236 37.107 40.681C37.0605 40.384 37.0215 40.087 37.0605 39.79V39.532C37.0605 39.571 37.0605 39.532 37.0605 39.532V39.3205C37.0605 39.148 37.107 39.0235 37.146 38.851C37.3725 37.531 38.013 36.319 38.982 35.398C39.24 35.14 39.4905 34.9285 39.795 34.765C40.092 34.546 40.389 34.375 40.686 34.249C40.983 34.123 41.3265 33.991 41.6625 33.9055C42.006 33.82 42.3495 33.742 42.6855 33.742C42.858 33.742 43.029 33.6955 43.2015 33.6955H43.5375C43.584 33.6955 43.5375 33.6955 43.5375 33.6955H43.71C44.85 33.79 45.9525 34.1245 46.9515 34.6795C48.3105 35.4445 49.4595 36.5935 50.139 38.0005C50.4825 38.68 50.7405 39.4465 50.865 40.258C50.904 40.4695 50.904 40.6405 50.9505 40.852V41.962C50.9505 42.1735 50.9115 42.391 50.9115 42.6025C50.865 42.814 50.865 43.024 50.826 43.2355L50.6925 43.876C50.6535 44.0875 50.442 44.689 50.31 45.1105C50.1855 45.5395 49.5915 46.6885 49.0755 47.368C48.0435 48.79 46.662 49.915 45.0675 50.65C44.2635 50.9935 43.4505 51.2905 42.5985 51.415C42.177 51.5005 41.754 51.5485 41.325 51.5485H40.6845C40.7235 51.5485 40.6845 51.5485 40.6845 51.5485H40.6455C40.434 51.5485 40.176 51.5485 39.9585 51.502C39.021 51.4165 38.13 51.244 37.2315 50.9935C36.3405 50.7355 35.49 50.392 34.677 49.9705C33.06 49.096 31.623 47.908 30.4665 46.4785C29.9115 45.7525 29.3955 44.986 28.974 44.182C28.545 43.369 28.248 42.5185 27.99 41.6665C27.7485 40.807 27.6 39.925 27.5685 39.0265V37.7065C27.5685 37.285 27.6075 36.8155 27.693 36.3475C27.7395 35.878 27.8265 35.449 27.9045 34.981C27.99 34.5205 28.1235 34.09 28.248 33.622C28.3725 33.154 28.803 31.8805 29.1855 31.0675C29.9505 29.4505 30.936 27.997 32.0835 26.848C32.3805 26.551 32.6775 26.293 33.021 26.044C33.1455 25.9105 33.4425 25.654 33.786 25.4425C34.122 25.231 34.4655 25.021 34.848 24.8485C35.0205 24.763 35.1915 24.676 35.403 24.5905C35.4885 24.5515 35.5755 24.505 35.7 24.466C35.7855 24.427 35.8725 24.3805 35.997 24.3325C36.3795 24.169 36.762 24.0355 37.146 23.911C37.2315 23.872 37.365 23.872 37.4505 23.8255C37.536 23.779 37.662 23.7865 37.7475 23.74C37.833 23.6935 38.13 23.6545 38.3415 23.5675C38.427 23.5285 38.553 23.5285 38.6385 23.482C38.724 23.482 38.85 23.443 38.9355 23.443C39.021 23.443 39.147 23.3965 39.2325 23.3965L39.576 23.311C39.6615 23.311 39.7875 23.272 39.873 23.272C40.0065 23.272 40.0845 23.233 40.2165 23.233C40.302 23.233 40.467 23.1865 40.5525 23.1865C40.638 23.1865 40.686 23.1865 40.764 23.1475H41.061C41.1945 23.1475 41.28 23.1475 41.4045 23.1085H41.577C41.577 23.1085 41.616 23.1085 41.577 23.1085H43.1475C43.9125 23.1475 44.6865 23.233 45.405 23.359C46.8345 23.6095 48.21 24.07 49.4985 24.7255C50.694 25.303 51.8115 26.0305 52.8195 26.8975C52.8585 26.9365 52.944 26.983 52.992 27.061C53.031 27.1075 53.1165 27.1465 53.1555 27.2335C53.289 27.319 53.3745 27.445 53.499 27.5305C53.6235 27.616 53.7105 27.742 53.8425 27.8275C53.928 27.961 54.054 28.0465 54.1395 28.171C55.272 29.335 56.226 30.6715 56.952 32.1325C56.991 32.1715 56.991 32.218 57.0375 32.305C57.0765 32.344 57.0765 32.3905 57.123 32.4685C57.162 32.554 57.2085 32.6875 57.2865 32.773C57.333 32.8585 57.372 32.9845 57.42 33.07C57.459 33.1555 57.5055 33.2815 57.5445 33.367C57.717 33.7495 57.8415 34.132 57.9735 34.516C58.185 35.11 58.3095 35.626 58.443 36.0475C58.4895 36.2275 58.6455 36.3445 58.8255 36.352C59.037 36.352 59.1615 36.1795 59.1615 35.962C59.1225 35.4535 59.1225 34.9 59.076 34.2595L59.0895 34.2505Z"
      fill="white"
    />
  </svg>
)

export default Logo
