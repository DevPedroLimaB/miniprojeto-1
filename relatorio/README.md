

         /\      Grafana   /‾‾/  
    /\  /  \     |\  __   /  /   
   /  \/    \    | |/ /  /   ‾‾\ 
  /          \   |   (  |  (‾)  |
 / __________ \  |_|\_\  \_____/ 

     execution: local
        script: load_test.js
        output: -

     scenarios: (100.00%) 1 scenario, 100 max VUs, 3m30s max duration (incl. graceful stop):
              * default: Up to 100 looping VUs for 3m0s over 4 stages (gracefulRampDown: 30s, gracefulStop: 30s)


     ✓ status é 200
     ✗ tempo de resposta menor que 200ms
      ↳  99% — ✓ 7180 / ✗ 48

     checks.........................: 99.66% 14408 out of 14456
     data_received..................: 203 MB 1.1 MB/s
     data_sent......................: 896 kB 5.0 kB/s
     http_req_blocked...............: avg=2.36ms   min=0s      med=0s      max=363.61ms p(90)=0s       p(95)=0s
     http_req_connecting............: avg=1.09ms   min=0s      med=0s      max=248.5ms  p(90)=0s       p(95)=0s
     http_req_duration..............: avg=97.91ms  min=76.81ms med=94.39ms max=411.83ms p(90)=110.43ms p(95)=119.33ms
       { expected_response:true }...: avg=97.91ms  min=76.81ms med=94.39ms max=411.83ms p(90)=110.43ms p(95)=119.33ms
     http_req_failed................: 0.00%  0 out of 7228
     http_req_receiving.............: avg=2.87ms   min=0s      med=2.08ms  max=53.09ms  p(90)=6.15ms   p(95)=8.52ms
     http_req_sending...............: avg=164.83µs min=0s      med=107.7µs max=7.27ms   p(90)=509.46µs p(95)=561.32µs
     http_req_tls_handshaking.......: avg=1.25ms   min=0s      med=0s      max=142.61ms p(90)=0s       p(95)=0s
     http_req_waiting...............: avg=94.87ms  min=74.71ms med=91.5ms  max=403.07ms p(90)=106.85ms p(95)=116.16ms
     http_reqs......................: 7228   39.950708/s
     iteration_duration.............: avg=1.1s     min=1.07s   med=1.09s   max=1.49s    p(90)=1.11s    p(95)=1.12s
     iterations.....................: 7228   39.950708/s
     vus............................: 2      min=1              max=100
     vus_max........................: 100    min=100            max=100

                                                                                                                                                                                                             
running (3m00.9s), 000/100 VUs, 7228 complete and 0 interrupted iterations    